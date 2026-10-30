import Section from './Section.jsx'
import { AGENDAS } from '../data/content.js'

export default function StudyGuides() {
  return (
    <Section
      id="guides"
      index="06"
      eyebrow="Study guides"
      className="guides"
      heading={<>Study<br /><span className="soft">guides</span></>}
      lede="One guide per agenda. Download before the conclave to prepare your position."
    >
      <ul className="guide-list">
        {AGENDAS.map((a) => (
          <li className="guide reveal" key={a.num}>
            <div>
              <span className="agenda-num">{a.num}</span>
              <h3>{a.title}</h3>
            </div>
            {a.guide ? (
              <a className="btn btn-ghost" href={a.guide} download>Download guide</a>
            ) : (
              <span className="ph">[Add study guide PDF]</span>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}