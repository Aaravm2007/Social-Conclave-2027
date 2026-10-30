import Section from './Section.jsx'
import { DIGNITARIES } from '../data/content.js'

function initials(name) {
  return name
    .replace(/^(Shri\.|Smt\.|Dr\.)\s*/, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

export default function Dignitaries() {
  return (
    <Section
      id="dignitaries"
      index="05"
      eyebrow="Past dignitaries"
      heading={<>Past<br /><span className="soft">dignitaries</span></>}
      lede="Public figures who have joined past editions of Social Conclave."
    >
      <ul className="people-grid">
        {DIGNITARIES.map((p) => (
          <li className="person reveal" key={p.name}>
            <div className="avatar"><span>{initials(p.name)}</span></div>
            <h3>{p.name}</h3>
            <p className="role">{p.role}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}