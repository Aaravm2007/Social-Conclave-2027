import { useEffect, useRef, useState } from "react";
import Label from "../../../components/ui/Label.jsx";
import { DIGNITARIES } from "../data/content.js";

function GuestPortrait({ person: p, index: i }) {
  return (
    <article>
      <img src={`/images/guests/guest-${i}-512.webp`}
        srcSet={`/images/guests/guest-${i}-512.webp 512w, /images/guests/guest-${i}-1024.webp 1024w`}
        sizes="(min-width: 701px) 28vw, 43vw" width="1024" height="1024"
        decoding="async" alt={p.name} loading="lazy" />
      <h3>{p.name}</h3><p>{p.role}</p>
    </article>
  );
}

export default function Guests() {
  const trackRef = useRef(null);
  const [range, setRange] = useState({ first: 0, visible: 3, end: false });

  useEffect(() => {
    const track = trackRef.current;
    const update = () => {
      const card = track.firstElementChild;
      const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap);
      setRange({
        first: Math.round(track.scrollLeft / step),
        visible: Math.max(1, Math.round(track.clientWidth / step)),
        end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 2,
      });
    };
    const observer = new ResizeObserver(update);
    observer.observe(track);
    track.addEventListener("scroll", update, { passive: true });
    update();
    return () => { observer.disconnect(); track.removeEventListener("scroll", update); };
  }, []);

  const move = (direction) => {
    const track = trackRef.current;
    const step = track.firstElementChild.getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap);
    track.scrollBy({ left: direction * step * range.visible,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };

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
          A few of the voices who have joined past editions.
        </p>
      </div>
      <div className="guest-carousel">
      <div className="guest-controls">
        <span aria-live="polite" aria-atomic="true">
          {String(range.first + 1).padStart(2, "0")}{range.visible > 1 && `–${String(Math.min(range.first + range.visible, DIGNITARIES.length)).padStart(2, "0")}`} <span>/ {String(DIGNITARIES.length).padStart(2, "0")}</span>
        </span>
        <div>
          <button type="button" aria-label="Previous guests" aria-controls="guest-track" disabled={range.first === 0} onClick={() => move(-1)}>←</button>
          <button type="button" aria-label="Next guests" aria-controls="guest-track" disabled={range.end} onClick={() => move(1)}>→</button>
        </div>
      </div>
      <div className="guest-grid guest-track" id="guest-track" ref={trackRef}
        role="region" aria-label="Past guest portraits" tabIndex={0}
        onKeyDown={(event) => {
          if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
          event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1);
        }}>
        {DIGNITARIES.map((p, i) => (
          <GuestPortrait key={p.name} person={p} index={i} />
        ))}
      </div>
      </div>
    </section>
  );
}
