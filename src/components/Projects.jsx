import { projects, links } from '../data.js'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section__title">Projects</h2>
        <div className="projects">
          {projects.map((p) => (
            <article key={p.title} className="card">
              <div className="card__icon" aria-hidden="true">{p.icon}</div>
              <h3 className="card__title">{p.title}</h3>
              <p className="card__blurb">{p.blurb}</p>
              <ul className="card__tags">
                {p.tags.map((t) => (
                  <li key={t} className="chip chip--sm">{t}</li>
                ))}
              </ul>
              {p.link && (
                <a
                  className="card__link"
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.linkLabel || 'View project'} <span aria-hidden="true">&gt;&gt;</span>
                </a>
              )}
            </article>
          ))}
        </div>
        {links.github && (
          <div className="projects__more">
            <a
              className="card__link"
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              See all on GitHub <span aria-hidden="true">&gt;&gt;</span>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
