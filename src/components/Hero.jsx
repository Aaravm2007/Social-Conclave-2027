import { EVENT, REGISTER_HREF } from '../data/content.js'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap">
        <p className="eyebrow reveal">{EVENT.organiser}</p>
        <h1 className="hero-title reveal">
          Social<br />Conclave<br /><span className="year">{EVENT.edition}</span>
        </h1>
        <p className="backed reveal">Backed by {EVENT.backedBy}</p>
        <div className="hero-bottom reveal">
          <p className="hero-intro">{EVENT.tagline}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={REGISTER_HREF}>Register now →</a>
            <a className="btn btn-ghost" href="#agenda">Explore the agenda</a>
          </div>
          <dl className="hero-meta">
            <div><dt>Dates</dt><dd>{EVENT.dates}</dd></div>
            <div><dt>Location</dt><dd>{EVENT.location}</dd></div>
            <div><dt>Format</dt><dd>{EVENT.format}</dd></div>
          </dl>
        </div>
      </div>
    </section>
  )
}