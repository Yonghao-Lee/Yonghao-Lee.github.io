import { skills } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Skills</h2>
        <div className="skills">
          {skills.map((group, i) => (
            <Reveal key={group.group} className="skills__group" delay={(i % 4) * 80}>
              <h3 className="skills__heading">{group.group}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item} className="chip">{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
