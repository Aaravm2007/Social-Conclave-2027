import Section from './Section.jsx'
import { ABOUT_SECTIONS, EVENT } from '../data/content.js'

export default function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      heading={<>About the<br /><span className="soft">conclave</span></>}
      lede="Social Conclave is MPSTME’s social initiative, where delegates from across the country gather to discuss pressing socio-economic issues and develop sustainable solutions."
    >
      <div className="about-blocks">
        {ABOUT_SECTIONS.map((s) => (
          <article className="about-block reveal" key={s.title}>
            <h3>{s.title}</h3>
            {s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </article>
        ))}
      </div>

      <dl className="facts about-facts reveal">
        <div><dt>Edition</dt><dd>{EVENT.edition}</dd></div>
        <div><dt>Dates</dt><dd>{EVENT.dates}</dd></div>
        <div><dt>Location</dt><dd>{EVENT.location}</dd></div>
        <div><dt>Organised by</dt><dd>{EVENT.organiser}</dd></div>
      </dl>
    </Section>
  )
}