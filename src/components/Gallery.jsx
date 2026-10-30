import { ArrowIcon, ImageIcon } from './Icons.jsx'

const TILES = [
  { cls: 'tile g1', ratio: '16:10' },
  { cls: 'tile g2', ratio: '4:5' },
  { cls: 'tile g3', ratio: '1:1' },
  { cls: 'tile g4', ratio: '4:3' },
  { cls: 'tile g5', ratio: '21:9' },
]

export default function Gallery() {
  return (
    <section className="gallery section" id="gallery" aria-labelledby="gallery-title">
      <div className="wrap">
        <header className="section-head">
          <div className="section-index">
            <span className="idx">05</span><span className="rule" /><span className="eyebrow">Gallery</span>
          </div>
          <h2 className="h2" id="gallery-title">Visual<br /><span className="soft">highlights</span></h2>
          <p className="lede">
            Frames prepared for event photography. Replace each placeholder with an approved image; the blue grade keeps the set consistent.
          </p>
        </header>

        <div className="gallery-grid">
          {TILES.map((t, i) => (
            <figure className={t.cls} key={i}>
              <div className="insert">
                <ImageIcon />
                <span>[Insert image]</span>
              </div>
              <figcaption><b>[Caption]</b><i>{t.ratio}</i></figcaption>
            </figure>
          ))}
        </div>

        <div className="gallery-foot">
          <p><span className="ph">[Gallery note]</span> — credit line or a short description of the featured moments.</p>
          <a className="btn btn-ghost" href="#">View full gallery <ArrowIcon /></a>
        </div>
      </div>
    </section>
  )
}