import FloralAccent from "./FloralAccent.jsx";
import Label from "../../../components/ui/Label.jsx";
import { FEES, REGISTER_HREF } from "../data/content.js";

export default function Registration() {
  return (
    <section id="register" className="section join floral-chapter">
      <div className="join-intro">
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
        <FloralAccent variant="invitation" />
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
          href={REGISTER_HREF}
          target="_blank"
          rel="noopener noreferrer"
        >
          Register now
        </a>
      </div>
    </section>
  );
}