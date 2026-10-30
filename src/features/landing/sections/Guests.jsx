import Label from "../../../components/ui/Label.jsx";
import { DIGNITARIES } from "../data/content.js";

export default function Guests() {
  return (
    <section id="dignitaries" className="section guests">
      <div className="section-heading">
        <div>
          <Label>A legacy of perspectives</Label>
          <h2>
            They’ve been
            <br />
            <em>part of the conversation.</em>
          </h2>
        </div>
        <p>
          A few of the voices who have joined past editions. The 2027 line-up
          will be announced separately.
        </p>
      </div>
      <div className="guest-grid">
        {DIGNITARIES.map((p, i) => (
          <article key={p.name}>
            <img
              src={`/images/guests/guest-${i}-512.webp`}
              srcSet={`/images/guests/guest-${i}-512.webp 512w, /images/guests/guest-${i}-1024.webp 1024w`}
              sizes="(min-width: 1051px) 17vw, 28vw"
              width="1024"
              height="1024"
              decoding="async"
              alt={p.name}
              loading="lazy"
            />
            <h3>{p.name}</h3>
            <p>{p.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
