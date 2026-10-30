import { ArrowIcon } from './Icons.jsx'

const SCHEDULE = [0, 1, 2, 3, 4, 5]

export default function Events() {
  return (
    <section className="events section" id="events" aria-labelledby="events-title">
      <div className="wrap">
        <header className="section-head">
          <div className="section-index">
            <span className="idx">03</span><span className="rule" /><span className="eyebrow">Events</span>
          </div>
          <h2 className="h2" id="events-title">Programme</h2>
          <p className="lede">
            <span className="ph">[Add programme overview]</span> A brief line on the events planned for this edition and how visitors can take part.
          </p>
        </header>

        <div className="events-grid">
          <article className="event-feature">
            <div className="event-visual">
              <div className="date-block"><span className="d">[DD]</span><span className="m">[Month]</span></div>
              <span className="event-flag">Featured event</span>
            </div>
            <div className="event-body">
              <span className="init-tag ph">[Event format]</span>
              <h3><span className="ph">[Event title]</span></h3>
              <p className="ph-copy">
                <span className="ph">[Event description]</span> Two or three sentences introducing the event — its theme, what attendees will experience and who it is designed for.
              </p>
              <dl className="event-meta">
                <div><dt>Date &amp; time</dt><dd className="ph">[Date and time]</dd></div>
                <div><dt>Venue</dt><dd className="ph">[Venue]</dd></div>
                <div><dt>Category</dt><dd className="ph">[Category]</dd></div>
              </dl>
              <div className="event-actions">
                <a className="btn btn-primary" href="#">Event details <ArrowIcon /></a>
                <a className="btn btn-ghost" href="#">[Registration link]</a>
              </div>
            </div>
          </article>

          <div className="schedule-wrap">
            <div className="schedule-label">
              <span className="eyebrow">Upcoming</span>
              <a className="link-arrow" href="#"><span>Full programme</span> <ArrowIcon /></a>
            </div>
            <div className="schedule" role="table" aria-label="Upcoming events (placeholder)">
              <div className="schedule-head" role="row">
                <span role="columnheader">Date</span>
                <span role="columnheader">Event</span>
                <span role="columnheader" aria-hidden="true" />
              </div>
              {SCHEDULE.map((i) => (
                <a className="schedule-row" role="row" href="#" key={i}>
                  <span className="s-date" role="cell"><span className="ph">[Date]</span><small>[Time]</small></span>
                  <span className="s-title" role="cell"><span className="ph">[Event title]</span><small>[Category]</small></span>
                  <span className="s-go" role="cell"><ArrowIcon /></span>
                </a>
              ))}
            </div>
            <p className="schedule-note">
              <span><span className="ph">[Programme note]</span> — registration guidance, eligibility or timing information for attendees.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}