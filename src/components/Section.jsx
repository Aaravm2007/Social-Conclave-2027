export default function Section({ id, index, eyebrow, heading, lede, className = '', children }) {
  return (
    <section id={id} className={`section ${className}`} aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <header className="section-head reveal">
          <div className="section-index">
            <span className="idx">{index}</span>
            <span className="rule" />
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <h2 className="h2" id={`${id}-title`}>{heading}</h2>
          {lede && <p className="lede">{lede}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}