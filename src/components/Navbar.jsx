import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import SilverLineWordmark from './SilverLineWordmark'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Evan', to: '/evan' },
  { label: 'William', to: '/william' },
  { label: 'Contact', to: '/#contact', isContact: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const handleContactClick = (e) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      }, 400)
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/'
    return location.pathname === to
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--solid' : 'navbar--transparent'}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" aria-label="Silver Line — Home">
          <SilverLineWordmark className="silver-line-wordmark--nav" />
        </Link>

        <button
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
        </button>

        <nav id="main-nav" className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          <ul className="navbar__links">
            {NAV_LINKS.map(({ label, to, isContact }) => (
              <li key={label}>
                {isContact ? (
                  <a
                    href="/#contact"
                    className="navbar__link"
                    onClick={handleContactClick}
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    to={to}
                    className={`navbar__link ${isActive(to) ? 'navbar__link--active' : ''}`}
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
