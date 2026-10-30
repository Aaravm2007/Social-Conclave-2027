import { useId } from "react";
import "./hero-title.css";

const colours = ["#263e49", "#59868d", "#c1dde0", "#f2f0df", "#a6b3b2", "#293034", "#101e25", "#d4a345", "#ffe5a1", "#f5c668", "#a96529", "#ffebbd"];
const curves = [
  [[-32, -850], [65, -370], [100, 60], [192, 184]],
  [[192, 184], [232, 238], [274, 237], [340, 255]],
  [[340, 255], [400, 272], [456, 280], [512, 282]],
];

function point(t, across) {
  const section = Math.min(2, Math.floor(t * 3));
  const u = t === 1 ? 1 : t * 3 - section;
  const v = 1 - u;
  const [a, b, c, d] = curves[section];
  const x = v ** 3 * a[0] + 3 * v * v * u * b[0] + 3 * v * u * u * c[0] + u ** 3 * d[0];
  const y = v ** 3 * a[1] + 3 * v * v * u * b[1] + 3 * v * u * u * c[1] + u ** 3 * d[1];
  const dx = 3 * v * v * (b[0] - a[0]) + 6 * v * u * (c[0] - b[0]) + 3 * u * u * (d[0] - c[0]);
  const dy = 3 * v * v * (b[1] - a[1]) + 6 * v * u * (c[1] - b[1]) + 3 * u * u * (d[1] - c[1]);
  const length = Math.hypot(dx, dy);
  const width = 104 * (1 - .25 * Math.sin(t * Math.PI) ** 2);
  return [x - dy / length * width * across, y + dx / length * width * across].map(n => n.toFixed(2)).join(',');
}

function strip(from, to) {
  const edge = (offset, reverse) => Array.from({ length: 181 }, (_, i) => point((reverse ? 180 - i : i) / 180, offset));
  return `M ${edge(from, false).join(' L ')} L ${edge(to, true).join(' L ')} Z`;
}
const bands = colours.map((colour, i) => ({ colour, path: strip(i / 12 - .5, (i + 1) / 12 - .5 + .001) }));
const threads = Array.from({ length: 96 }, (_, i) => strip(i / 96 - .5, i / 96 - .5 + .004));

export default function HeroTitle() {
  const id = useId().replaceAll(':', '');
  return (
    <h1 id="hero-title" className="stretch-title" aria-label="Social Conclave 2027">
      <svg className="stretch-title-art" viewBox="0 0 1200 550" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={`${id}-letters`} x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#fff7df" /><stop offset="1" stopColor="#ffe6b5" />
          </linearGradient>
        </defs>
        <g className="hero-layered-ribbon">
          {bands.map(({ colour, path }) => <path key={colour} d={path} fill={colour} />)}
          {threads.map((path, i) => <path key={i} d={path} fill={i % 3 === 0 ? '#fff7dc' : '#111d25'} opacity={i % 3 === 0 ? '.35' : '.23'} />)}
        </g>
        <image href="/images/hero/buildings-v1.png" x="644" y="72" width="128" height="178" transform="rotate(-7 708 250)" />
        <image href="/images/hero/carbon-v1.png" x="332" y="304" width="100" height="105" transform="rotate(-6 382 409)" />
        <image href="/images/hero/waste-v1.png" x="806" y="322" width="72" height="80" transform="rotate(8 842 402)" />
        <g fill={`url(#${id}-letters)`} fontFamily="'DM Sans', Arial, sans-serif" fontWeight="700" fontSize="143" letterSpacing="-8">
          <text x="480" y="335" textLength="708" lengthAdjust="spacingAndGlyphs">SOCIAL</text>
          <text x="310" y="475" textLength="878" lengthAdjust="spacingAndGlyphs">CONCLAVE</text>
        </g>
        <image href="/images/hero/bird-v1.png" x="1010" y="116" width="166" height="112" transform="rotate(-12 1093 172)" />
        <image href="/images/hero/chopsticks-v1.png" x="1032" y="320" width="164" height="126" />
        <text className="stretch-edition" x="1188" y="527" textAnchor="end">2027 / THE TENTH EDITION</text>
      </svg>
    </h1>
  );
}
