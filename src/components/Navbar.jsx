import { useEffect, useState } from 'react'
import { profile } from '../data.js'
import ThemeToggle from './ThemeToggle.jsx'

const sections = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['contact', 'Contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight whichever section is currently centered in the viewport.
  useEffect(() => {
    const els = sections
      .map(([id]) => document.getElementById(id))
      .filter(Boolean)
    if (!els.length || typeof IntersectionObserver === 'undefined') return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  // Use the first name as a compact logo.
  const initials = profile.name.split(' ').map((w) => w[0]).join('')

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__logo" onClick={() => setOpen(false)}>
          <span className="nav__logo-mark">{initials}</span>
          <span className="nav__logo-text">{profile.name}</span>
        </a>

        <div className="nav__right">
          <nav className={`nav__links ${open ? 'is-open' : ''}`}>
            {sections.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? 'is-active' : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>

          <ThemeToggle />

          <button
            className="nav__toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
