import SilverLineWordmark from './SilverLineWordmark'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <SilverLineWordmark className="silver-line-wordmark--sm" />
        <div className="footer__emails">
          <a href="mailto:eb@silverlinestudios.net">eb@silverlinestudios.net</a>
          <span className="footer__divider" aria-hidden="true">·</span>
          <a href="mailto:william@silverlinestudios.net">william@silverlinestudios.net</a>
        </div>
        <p className="footer__copy">
          &copy; {year} Silver Line Studios. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
