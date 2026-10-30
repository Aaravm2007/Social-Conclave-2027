import Section from './Section.jsx'
import { PARTNERS } from '../data/content.js'

export default function Partners() {
  return (
    <Section
      id="partners"
      index="07"
      eyebrow="Partners"
      heading={<>Backed<br /><span className="soft">by</span></>}
      lede="Social Conclave 2027 is backed by the United Nations and built with partners across academia, social impact and international development."
    >
      <ul className="partner-grid">
        {PARTNERS.map((p) => (
          <li className="partner-card reveal" key={p.name}>
            <span className="partner-note">{p.note}</span>
            <h3>{p.name}</h3>
          </li>
        ))}
      </ul>
      <p className="ph">[Add other international foundations and sponsor tiers when confirmed]</p>
    </Section>
  )
}