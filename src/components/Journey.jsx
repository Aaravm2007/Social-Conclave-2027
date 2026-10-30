const MILESTONES = ['10%', '30%', '50%', '70%', '90%']
const METRICS = ['Metric label', 'Metric label', 'Metric label', 'Metric label']

export default function Journey() {
  return (
    <section className="journey section" id="journey" aria-labelledby="journey-title">
      <div className="wrap">
        <header className="section-head">
          <div className="section-index">
            <span className="idx">04</span><span className="rule" /><span className="eyebrow">Journey</span>
          </div>
          <h2 className="h2" id="journey-title">Editions &amp;<br /><span className="soft">milestones</span></h2>
          <p className="lede">
            <span className="ph">[Add history overview]</span> An editable framework for the committee's journey — add each edition or milestone once the details are verified.
          </p>
        </header>
      </div>

      <div className="timeline">
        <div className="timeline-glow" aria-hidden="true" />
        <div className="timeline-ribbon" aria-hidden="true" />
        <ol className="milestones">
          {MILESTONES.map((x) => (
            <li className="milestone" style={{ '--x': x }} key={x}>
              <span className="stem" />
              <div className="card">
                <span className="yr">[Year]</span>
                <h3 className="ph">[Milestone title]</h3>
                <p>[Add description] — a line on what this moment meant.</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="wrap impact">
        <div className="impact-intro">
          <span className="eyebrow">Impact framework</span>
          <p>Space for verified figures only. Each value stays a placeholder until confirmed by the committee.</p>
        </div>
        <div className="metrics">
          {METRICS.map((label, i) => (
            <div className="metric" key={i}>
              <span className="v">[00]</span>
              <span className="l">[{label}]</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}