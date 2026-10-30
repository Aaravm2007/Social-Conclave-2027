import Label from "../../../components/ui/Label.jsx";
import { AGENDAS } from "../data/content.js";

export default function Agendas() {
  return (
    <section id="agenda" className="section agendas">
      <div className="section-heading">
        <div>
          <Label>Choose your conversation</Label>
          <h2>
            Five agendas.
            <br />
            <em>Infinite possibilities.</em>
          </h2>
        </div>
        <p>
          From the cities we build to the waste we leave behind. Find the
          question you can’t stop thinking about.
        </p>
      </div>
      <div className="agenda-grid">
        {AGENDAS.map((a, i) => (
          <article className={`agenda-card agenda-${i}`} key={a.num}>
            <div className="agenda-art">
              <img
                src={`/images/agendas/agenda-${i}-800.webp`}
                srcSet={`/images/agendas/agenda-${i}-800.webp 800w, /images/agendas/agenda-${i}-1600.webp 1600w`}
                sizes="(min-width: 1051px) 28vw, (min-width: 701px) 43vw, 88vw"
                width="1600"
                height="840"
                decoding="async"
                loading="lazy"
                alt={
                  [
                    "Flowing urban architecture",
                    "Industrial smoke and dark flowing ribbons",
                    "Noodles and flowing gold ribbons",
                    "Colourful bird in flight",
                    "Waste collection and flowing silver ribbons",
                  ][i]
                }
              />
              <span>AGENDA / {a.num}</span>
            </div>
            <div className="agenda-content">
              <h3>{a.title}</h3>
              <p>{a.tagline}</p>
              <details>
                <summary>
                  Explore the agenda <span aria-hidden="true">+</span>
                </summary>
                <div className="agenda-brief">
                  {a.details.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  <a href="#register" className="text-link dark">
                    Bring your perspective
                  </a>
                </div>
              </details>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
