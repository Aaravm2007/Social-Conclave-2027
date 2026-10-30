import Section from './Section.jsx'
import { EVENT, FEES } from '../data/content.js'

export default function Register() {
  return (
    <Section
      id="register"
      index="09"
      eyebrow="Registration"
      className="register"
      heading={<>Registration<br /><span className="soft">fees</span></>}
    >
      <div className="fees">
        <div className="reveal">
          <p>{FEES.intro}</p>
          <ul className="fee-list">
            {FEES.inclusions.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p>{FEES.closing}</p>
        </div>

        <div className="fee-card reveal">
          <p className="eyebrow">{FEES.label}</p>
          <p className="fee-amount">{FEES.amount}</p>
          <p className="fee-note">{FEES.gst}</p>
          {EVENT.registerUrl ? (
            <a className="btn btn-primary" href={EVENT.registerUrl} target="_blank" rel="noopener noreferrer">
              Register now →
            </a>
          ) : (
            <a className="btn btn-primary" href="mailto:daneeka.roy81@nmims.in">Enquire about registration →</a>
          )}
        </div>
      </div>
    </Section>
  )
}