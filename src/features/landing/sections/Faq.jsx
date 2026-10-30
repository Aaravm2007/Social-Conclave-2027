import Label from "../../../components/ui/Label.jsx";
import { FAQS } from "../data/faqs.js";

export default function Faq() {
  return (
    <section id="faq" className="section faq">
      <div>
        <Label>Before you join</Label>
        <h2>
          A few things
          <br />
          <em>you might ask.</em>
        </h2>
      </div>
      <div>
        {FAQS.map(([q, a]) => (
          <details key={q}>
            <summary>
              {q}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
