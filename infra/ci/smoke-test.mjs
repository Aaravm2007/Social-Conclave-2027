import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { readdir, readFile } from "node:fs/promises";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { stripVTControlCharacters } from "node:util";
import { setTimeout as delay } from "node:timers/promises";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const output = join(root, "dist");
const port = process.env.SMOKE_PORT || "4173";
assert.match(port, /^\d+$/, "SMOKE_PORT must be a port number");
const origin = `http://127.0.0.1:${port}`;
const index = await readFile(join(output, "index.html"), "utf8");
assert.match(index, /<title>Social Conclave 2027<\/title>/);

// A real Vite preview verifies the output a static host would receive.
const server = spawn(
  process.execPath,
  [
    join(root, "node_modules/vite/bin/vite.js"),
    "preview",
    "--host",
    "127.0.0.1",
    "--port",
    port,
    "--strictPort",
  ],
  { cwd: root, stdio: ["ignore", "pipe", "pipe"] },
);
let diagnostics = "";
let ready = false;
server.stdout.on("data", (chunk) => {
  diagnostics = (diagnostics + chunk).slice(-8000);
  // Vite styles the port separately in CI. Match the readable URL rather
  // than the raw output, which can contain ANSI codes inside the URL.
  ready = stripVTControlCharacters(diagnostics).includes(origin);
});
server.stderr.on("data", (chunk) => {
  diagnostics = (diagnostics + chunk).slice(-8000);
});
const closed = new Promise((resolveClose) =>
  server.once("close", resolveClose),
);
let spawnError;
server.once("error", (error) => {
  spawnError = error;
});

async function filesIn(directory) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) result.push(...(await filesIn(path)));
    else result.push(path);
  }
  return result;
}

try {
  const deadline = Date.now() + 20000;
  while (true) {
    if (spawnError) throw spawnError;
    assert.equal(
      server.exitCode,
      null,
      `Preview exited before becoming ready:\n${stripVTControlCharacters(diagnostics)}`,
    );
    try {
      const response = await fetch(origin, {
        signal: AbortSignal.timeout(1000),
      });
      if (response.ok && ready) break;
    } catch {
      /* Retry until the preview starts or the deadline is reached. */
    }
    assert.ok(
      Date.now() < deadline,
      `Preview did not start:\n${stripVTControlCharacters(diagnostics)}`,
    );
    await delay(100);
  }
  const home = await fetch(origin, { signal: AbortSignal.timeout(5000) });
  assert.equal(await home.text(), index, "Preview must serve the built HTML");
  const files = await filesIn(output);
  assert.ok(
    files.some((path) => path.endsWith(".js")),
    "Build must include JavaScript",
  );
  assert.ok(
    files.some((path) => path.endsWith(".css")),
    "Build must include CSS",
  );

  // Verify every shipped file, including responsive images. Byte comparison
  // catches a missing asset returning the SPA HTML fallback with status 200.
  for (const path of files) {
    const url = relative(output, path)
      .split(sep)
      .map(encodeURIComponent)
      .join("/");
    const response = await fetch(`${origin}/${url}`, {
      signal: AbortSignal.timeout(5000),
    });
    assert.equal(response.status, 200, `Asset did not load: ${url}`);
    assert.ok(
      Buffer.from(await response.arrayBuffer()).equals(await readFile(path)),
      `Incorrect asset response: ${url}`,
    );
  }
  const references = [...index.matchAll(/(?:src|href)="([^"]+)"/g)]
    .map((match) => match[1])
    .filter((url) => url.startsWith("/"));
  for (const url of references) {
    const response = await fetch(new URL(url, origin), {
      signal: AbortSignal.timeout(5000),
    });
    assert.equal(response.status, 200, `HTML asset did not load: ${url}`);
    assert.notEqual(
      await response.text(),
      index,
      `HTML asset returned the page fallback: ${url}`,
    );
  }
  console.log(
    `Production smoke test passed: homepage and ${files.length} built files served correctly.`,
  );
} finally {
  server.kill("SIGTERM");
  const force = setTimeout(() => server.kill("SIGKILL"), 2000);
  force.unref();
  await closed;
  clearTimeout(force);
}
