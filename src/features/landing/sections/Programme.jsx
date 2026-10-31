import "./programme-tabs.css";
import { useState } from "react";
import Label from "../../../components/ui/Label.jsx";
import { SCHEDULE, LOCATIONS } from "../data/content.js";

export default function Programme() {
  const [day, setDay] = useState(0);
  return (
    <section id="schedule" className="section programme">
      <div className="section-heading">
        <div>
          <Label>Make four days count</Label>
          <h2>
            Step into
            <br />
            <em>the experience.</em>
          </h2>
        </div>
        <p>
          25–28 February 2027
          <br />
          Vile Parle West, Mumbai
        </p>
      </div>
      <div className="day-tabs" style={{ "--active-day": day }} role="tablist" aria-label="Event days">
        {SCHEDULE.map((d, i) => (
          <button
            key={d.day}
            role="tab"
            id={`day-tab-${i}`}
            aria-selected={day === i}
            aria-controls="day-panel"
            tabIndex={day === i ? 0 : -1}
            onKeyDown={(event) => {
              const keys = ["ArrowRight", "ArrowLeft", "Home", "End"];
              if (!keys.includes(event.key)) return;
              event.preventDefault();
              const next =
                event.key === "Home"
                  ? 0
                  : event.key === "End"
                    ? 3
                    : (i + (event.key === "ArrowRight" ? 1 : 3)) % 4;
              setDay(next);
              event.currentTarget.parentElement.children[next].focus();
            }}
            onClick={() => setDay(i)}
          >
            <span>{d.day}</span>
            <strong>{25 + i} FEB</strong>
          </button>
        ))}
      </div>
      <div
        key={day}
        className="programme-panel"
        id="day-panel"
        role="tabpanel"
        aria-labelledby={`day-tab-${day}`}
      >
        <div className="day-intro">
          <span>0{day + 1} / 04</span>
          <h3>
            {
              [
                "The conversation starts.",
                "Out of the room. Into the world.",
                "Challenge your perspective.",
                "Turn ideas into possibilities.",
              ][day]
            }
          </h3>
          <p>{SCHEDULE[day].venue}</p>
        </div>
        <ol className="timeline">
          {SCHEDULE[day].items.map((x) => (
            <li key={x.time}>
              <time>{x.time}</time>
              <h4>{x.title}</h4>
            </li>
          ))}
        </ol>
      </div>
      <details className="venue-details">
        <summary>
          Plan your visit — venues & addresses <span>+</span>
        </summary>
        <div>
          {LOCATIONS.map((x) => (
            <article key={x.label}>
              <h3>{x.label}</h3>
              <p>{x.venue}</p>
            </article>
          ))}
        </div>
      </details>
    </section>
  );
}
