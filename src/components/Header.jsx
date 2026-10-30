import { useEffect, useState } from 'react'
import { EVENT, NAV, REGISTER_HREF } from '../data/content.js'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="wrap header-inner">
          <a className="brand" href="#top" onClick={close}>{EVENT.name}</a>
          <nav className="nav" aria-label="Primary">
            <ul>
              {NAV.map((item) => (
                <li key={item.id}><a href={`#${item.id}`}>{item.label}</a></li>
              ))}
            </ul>
          </nav>
          <a className="btn btn-primary header-cta" href={REGISTER_HREF}>Register now</a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className="mobile-menu" id="mobile-menu">
        <ol>
          {NAV.map((item) => (
            <li key={item.id}><a href={`#${item.id}`} onClick={close}>{item.label}</a></li>
          ))}
        </ol>
        <a className="btn btn-primary" href={REGISTER_HREF} onClick={close}>Register now</a>
      </div>
    </>
  )
}