import Section from './Section.jsx'
import { SCHEDULE, LOCATIONS } from '../data/content.js'

export default function Schedule() {
  return (
    <Section
      id="schedule"
      index="03"
      eyebrow="Schedule"
      heading={<>Event<br /><span className="soft">flow</span></>}
      lede="Four days, 25–28 February 2027."
    >
      <div className="schedule-days">
        {SCHEDULE.map((day) => (
          <div className="day reveal" key={day.day}>
            <header className="day-head">
              <span className="day-label">{day.day}</span>
              <span className="day-date">{day.date}</span>
            </header>
            <p className="day-venue">{day.venue}</p>
            <ol className="timeline">
              {day.items.map((item, i) => (
                <li key={i}>
                  <span className="time">{item.time}</span>
                  <h3>{item.title}</h3>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <div className="location-grid reveal">
        {LOCATIONS.map((loc) => (
          <div className="location-card" key={loc.label}>
            <h3>{loc.label}</h3>
            <p>{loc.venue}</p>
          </div>
        ))}
      </div>
      <p className="schedule-note">Delegate kits will be provided. Meals are provided as per the event flow.</p>
    </Section>
  )
}