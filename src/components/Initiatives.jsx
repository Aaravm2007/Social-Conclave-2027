import { ArrowIcon } from './Icons.jsx'

export default function Initiatives() {
  return (
    <section className="initiatives section" id="initiatives" aria-labelledby="init-title">
      <div className="wrap">
        <header className="section-head">
          <div className="section-index">
            <span className="idx">02</span><span className="rule" /><span className="eyebrow">Initiatives</span>
          </div>
          <h2 className="h2" id="init-title">Initiatives &amp;<br /><span className="soft">focus areas</span></h2>
          <p className="lede">
            <span className="ph">[Add overview]</span> A short paragraph introducing the committee's initiatives — the areas they address and the people they involve.
          </p>
        </header>

        <div className="init-grid">
          <article className="init init--feature">
            <div className="feature-top">
              <span className="feature-num" aria-hidden="true">01</span>
              <span className="init-tag ph">[Category]</span>
            </div>
            <div className="feature-body">
              <span className="init-tag">Flagship initiative</span>
              <h3><span className="ph">[Initiative title]</span></h3>
              <p className="ph-copy">
                <span className="ph">[Add description]</span> Two or three lines describing the initiative's intent, its format and the community it serves.
              </p>
              <a className="link-arrow" href="#"><span>Learn more</span> <ArrowIcon /></a>
            </div>
          </article>

          <article className="init init--rule">
            <span className="init-icon" aria-hidden="true">
              <svg viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.3">
                <circle cx="13" cy="13" r="4.2" />
                <ellipse cx="13" cy="13" rx="11" ry="5" transform="rotate(-28 13 13)" />
                <circle cx="22.2" cy="8.2" r="1.3" fill="currentColor" stroke="none" />
              </svg>
            </span>
            <div>
              <div className="meta"><span className="n">02</span><span className="init-tag ph">[Category]</span></div>
              <h3><span className="ph">[Initiative title]</span></h3>
              <p className="ph-copy"><span className="ph">[Add description]</span> A concise summary of what this initiative does and who takes part.</p>
              <a className="link-arrow" href="#"><span>Learn more</span> <ArrowIcon /></a>
            </div>
          </article>

          <article className="init init--rule">
            <span className="init-icon" aria-hidden="true">
              <svg viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
                <path d="M2 6c6 0 8 7 11 7s5-7 11-7" />
                <path d="M2 20c6 0 8-7 11-7s5 7 11 7" />
                <circle cx="13" cy="13" r="1.6" fill="currentColor" stroke="none" />
              </svg>
            </span>
            <div>
              <div className="meta"><span className="n">03</span><span className="init-tag ph">[Category]</span></div>
              <h3><span className="ph">[Initiative title]</span></h3>
              <p className="ph-copy"><span className="ph">[Add description]</span> A concise summary of what this initiative does and who takes part.</p>
              <a className="link-arrow" href="#"><span>Learn more</span> <ArrowIcon /></a>
            </div>
          </article>

          <article className="init init--band">
            <span className="band-num" aria-hidden="true">04</span>
            <div className="band-title">
              <span className="init-tag ph">[Category]</span>
              <h3><span className="ph">[Initiative title]</span></h3>
            </div>
            <p className="ph-copy">
              <span className="ph">[Add description]</span> One or two lines on this initiative — its aims, the format it takes and how students can join in.
            </p>
            <a className="band-go" href="#" aria-label="Learn more about initiative 04"><ArrowIcon /></a>
          </article>
        </div>
      </div>
    </section>
  )
}