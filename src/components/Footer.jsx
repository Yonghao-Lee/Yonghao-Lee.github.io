import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="footer__built">
          Built with love <span className="footer__heart">♥</span> · React + Vite
        </span>
      </div>
    </footer>
  )
}
