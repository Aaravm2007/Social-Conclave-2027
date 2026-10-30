import { EVENT, LOCATIONS, CONTACTS } from '../data/content.js'

const copyrightYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="wrap footer-top">
        <div>
          <p className="brand">{EVENT.name}</p>
          <p className="footer-tag">Be the change.</p>
        </div>

        <div>
          <h4>Venue</h4>
          {LOCATIONS.map((loc) => (
            <address key={loc.label} style={{ marginBottom: '1rem' }}>
              <strong>{loc.label}</strong><br />
              {loc.venue}
            </address>
          ))}
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            {CONTACTS.map((c) => (
              <li key={c.email} style={{ marginBottom: '1rem' }}>
                <strong>{c.name}</strong>
                <span className="role-line">{c.role}</span>
                <a href={`tel:${c.phone.replace(/\s/g, '')}`}>{c.phone}</a><br />
                <a href={`mailto:${c.email}`}>{c.email}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Follow</h4>
          <ul>
            <li><span>{EVENT.handle}</span></li>
            <li><a href={EVENT.websiteUrl} target="_blank" rel="noopener noreferrer">{EVENT.website}</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-legal">
        <div className="wrap">
          <span>© {copyrightYear} {EVENT.name}</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
