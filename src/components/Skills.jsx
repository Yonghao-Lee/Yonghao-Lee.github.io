import { skills } from '../data.js'

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Skills</h2>
        <div className="skills">
          {skills.map((group) => (
            <div key={group.group} className="skills__group">
              <h3 className="skills__heading">{group.group}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item} className="chip">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
