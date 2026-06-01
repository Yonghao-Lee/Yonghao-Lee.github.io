import { profile, links } from '../data.js'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="hero__hello">Hello, I'm</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__tagline">{profile.tagline}</p>
        <p className="hero__intro">{profile.intro}</p>
        <div className="hero__cta">
          <a className="btn btn--primary" href="#projects">View my work</a>
          <a className="btn btn--ghost" href="#contact">Get in touch</a>
          {links.cv && (
            <a className="btn btn--ghost" href={links.cv} download>
              Download CV
            </a>
          )}
        </div>
        <a className="hero__scroll" href="#about" aria-label="Scroll to about">
          <span />
        </a>
      </div>
    </section>
  )
}
