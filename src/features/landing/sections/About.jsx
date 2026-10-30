import Label from "../../../components/ui/Label.jsx";

export default function About() {
  return (
    <section id="about" className="section about">
      <div>
        <Label>More than a conference</Label>
        <h2>
          The future needs
          <br />
          your <em>point of view.</em>
        </h2>
      </div>
      <div className="about-intro">
        <p>
          Some conversations change the way you see the world. This is where
          they begin.
        </p>
        <p>
          Social Conclave brings young people together to explore the challenges
          shaping our planet — and work towards solutions that reach beyond the
          room.
        </p>
        <p>
          An initiative of MPSTME, NMIMS. A community of curious minds. A shared
          belief that change starts with showing up.
        </p>
        <a className="text-link dark" href="#agenda">
          Explore what we stand for
        </a>
      </div>
      <div className="about-photo">
        <img
          src="/images/events/conclave-960.webp"
          srcSet="/images/events/conclave-960.webp 960w, /images/events/conclave-1920.webp 1920w"
          sizes="(min-width: 701px) 45vw, 88vw"
          width="1920"
          height="683"
          decoding="async"
          alt="Social Conclave booklet and materials at a previous edition"
          loading="lazy"
        />
        <span>Different perspectives. One shared future.</span>
      </div>
      <div className="about-numbers">
        <div>
          <strong>
            10<sup>th</sup>
          </strong>
          <span>Edition. A continuing movement.</span>
        </div>
        <div>
          <strong>600+</strong>
          <span>Delegates across past editions.</span>
        </div>
        <div>
          <strong>05</strong>
          <span>Agendas. Real questions to solve.</span>
        </div>
      </div>
    </section>
  );
}
