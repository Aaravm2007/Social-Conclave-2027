import { ArrowIcon } from './Icons.jsx'

const PATHWAYS = [
  ['A', 'Attend', 'How to attend upcoming events and sessions.'],
  ['B', 'Contribute', 'How to volunteer, present or help shape the programme.'],
  ['C', 'Collaborate', 'How organisations can work with the committee.'],
]

export default function Participate() {
  return (
    <section className="participate section" id="participate" aria-labelledby="cta-title">
      <div className="wrap">
        <div className="cta-grid">
          <div className="section-index">
            <span className="idx">06</span><span className="rule" /><span className="eyebrow">Participate</span>
          </div>
          <h2 className="cta-title display" id="cta-title">
            Be part of<br />the <span className="ir">conversation.</span>
          </h2>
          <div className="cta-side">
            <p className="ph-label">Add participation details</p>
            <p className="lede">
              Explain how students and visitors can get involved — registration windows, eligibility and the best way to reach the committee.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#">Register interest <ArrowIcon /></a>
              <a className="link-arrow" href="#contact"><span>Contact the committee</span> <ArrowIcon /></a>
            </div>
          </div>
        </div>

        <ul className="pathways">
          {PATHWAYS.map(([n, title, text]) => (
            <li className="pathway" key={n}>
              <span className="n">{n}</span>
              <h3>{title}</h3>
              <p><span className="ph">[Add details]</span> {text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}