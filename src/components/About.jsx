import { profile } from '../data.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section__title">About</h2>
        <div className="about">
          {profile.about.map((para, i) => (
            <p key={i} className="about__para">{para}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
