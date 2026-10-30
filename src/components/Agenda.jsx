import Section from './Section.jsx'
import { AGENDAS } from '../data/content.js'

export default function Agenda() {
  return (
    <Section
      id="agenda"
      index="02"
      eyebrow="Agenda"
      className="agenda"
      heading={<>Agendas<br /><span className="soft">2027</span></>}
      lede="Five agendas, one conclave. Open an agenda to read the full brief."
    >
      <ol className="agenda-grid">
        {AGENDAS.map((a) => (
          <li className="agenda-card reveal" key={a.num}>
            <span className="agenda-num">{a.num}</span>
            <h3>{a.title}</h3>
            <p className="agenda-tagline">{a.tagline}</p>
            <details className="agenda-details">
              <summary>Read the full agenda</summary>
              {a.details.map((p, i) => <p key={i}>{p}</p>)}
              <a className="link-arrow" href={a.guide || '#guides'}>
                <span>{a.guide ? 'Download study guide →' : 'Study guide (coming soon) →'}</span>
              </a>
            </details>
          </li>
        ))}
      </ol>
    </Section>
  )
}