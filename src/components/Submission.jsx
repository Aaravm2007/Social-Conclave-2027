import Section from './Section.jsx'
import { AGENDAS } from '../data/content.js'

function SubmitLink({ href, label }) {
  if (!href) return <span className="ph">[Add {label.toLowerCase()} link]</span>
  return (
    <a className="submit-link" href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  )
}

export default function Submission() {
  return (
    <Section
      id="submission"
      index="08"
      eyebrow="Submission"
      heading={<>Submit your<br /><span className="soft">work</span></>}
      lede="Each agenda accepts a report and a presentation. Use the link for the agenda you are working on."
    >
      <div className="table-wrap reveal">
        <table className="submission">
          <thead>
            <tr>
              <th>No.</th>
              <th>Agenda</th>
              <th>Submit</th>
            </tr>
          </thead>
          <tbody>
            {AGENDAS.map((a) => (
              <tr key={a.num}>
                <td>{a.num}</td>
                <td>{a.title}</td>
                <td>
                  <div className="actions">
                    <SubmitLink href={a.report} label="Report" />
                    <SubmitLink href={a.presentation} label="Presentation" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}