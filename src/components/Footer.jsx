import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="footer__built">
          Built with React + Vite · assisted by{' '}
          <a href="https://claude.com/claude-code" target="_blank" rel="noopener noreferrer">
            Claude Code
          </a>
        </span>
      </div>
    </footer>
  )
}
