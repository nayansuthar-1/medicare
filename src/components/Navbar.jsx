import { useState, useEffect } from 'react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#features' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#appointment' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__mark" aria-hidden="true">✚</span>
          <span className="brand__name">MediCare<span>+</span></span>
        </a>

        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#appointment" className="btn btn--primary nav__cta" onClick={() => setOpen(false)}>
            Book Appointment
          </a>
        </nav>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
