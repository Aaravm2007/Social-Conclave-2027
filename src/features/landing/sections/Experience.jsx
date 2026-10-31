import FloralAccent from "./FloralAccent.jsx";
import Label from "../../../components/ui/Label.jsx";

export default function Experience() {
  return (
    <section className="experience section floral-chapter" id="why">
      <div className="experience-heading">
        <div>
          <Label>Leave with more than memories</Label>
          <h2>
            Come for the ideas.
            <br />
            <em>Stay for everything else.</em>
          </h2>
        </div>
        <FloralAccent variant="experience" />
      </div>
      <div className="experience-grid">
        <article className="prize">
          <span>THE PRIZE POOL</span>
          <strong>
            ₹2.5<span>LAKH</span>
          </strong>
          <p>Prize pool for ideas with the potential to make a difference.</p>
        </article>
        <article>
          <h3>Beyond the classroom.</h3>
          <p>
            Field visits, a mock panchayat, and conversations with NGOs and
            experts. Get closer to the issues you’re here to solve.
          </p>
        </article>
        <article>
          <h3>Find your people.</h3>
          <p>
            New perspectives by day. Comedy night and a social mixer after
            hours. Make connections that outlast the conclave.
          </p>
        </article>
        <article>
          <h3>Take the experience forward.</h3>
          <p>
            An exclusive delegate kit and a UN Certificate of Participation to
            mark your contribution.
          </p>
        </article>
      </div>
    </section>
  );
}
