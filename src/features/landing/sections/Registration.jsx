import Label from "../../../components/ui/Label.jsx";
import { FEES, CONTACTS } from "../data/content.js";

export default function Registration() {
  return (
    <section id="register" className="section join">
      <div>
        <Label>Your perspective belongs here</Label>
        <h2>
          Don’t just watch
          <br />
          the world change.
          <br />
          <em>Be part of it.</em>
        </h2>
        <p>
          Four days. Five agendas. A room full of people
          <br />
          who believe we can do better, together.
        </p>
      </div>
      <div className="join-card">
        <span className="label">EARLY BIRD PARTICIPATION</span>
        <p className="join-price">
          ₹1,600<span>/ delegate</span>
        </p>
        <p className="price-note">Inclusive of GST · All four days</p>
        <ul>
          {FEES.inclusions.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <a
          className="button"
          href={`mailto:${CONTACTS[0].email}?subject=Social%20Conclave%202027%20Registration%20Enquiry`}
        >
          Enquire about registration
        </a>
        <p className="join-note">Connect directly with our organising team.</p>
      </div>
    </section>
  );
}
