import Section from './Section.jsx'
import { WHY_POINTS } from '../data/content.js'

export default function WhySocialConclave() {
  return (
    <Section
      id="why"
      index="04"
      eyebrow="Why attend"
      heading={<>Why<br /><span className="soft">Social Conclave?</span></>}
    >
      <ul className="why-grid">
        {WHY_POINTS.map((p) => (
          <li className="why-card reveal" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}