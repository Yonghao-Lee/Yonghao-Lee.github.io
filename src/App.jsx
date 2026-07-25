import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import PixelCat from './components/PixelCat.jsx'
import ChatWidget from './components/ChatWidget.jsx'
import RunnerGame from './components/RunnerGame.jsx'
import Starfield from './components/Starfield.jsx'

export default function App() {
  return (
    <>
      <Starfield />
      <div className="cabinet-frame" aria-hidden="true" />
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <section id="play" className="section">
          <div className="container">
            <h2 className="section__title">Take a break</h2>
            <RunnerGame />
            <p className="play-more__lead">…or lose half an hour in a folk-horror adventure I built:</p>
            <div className="play-grid">
              <a
                className="play-tile"
                href={import.meta.env.BASE_URL + 'acqua-alta/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="play-tile__icon" aria-hidden="true">🎭</span>
                <span className="play-tile__title">Acqua Alta</span>
                <span className="play-tile__desc">
                  A point-and-click set in a flooding, haunted 1930s Venice — 8 hand-drawn
                  districts, a branching puzzle web, and 9 endings. An unofficial fan parody of
                  <em> Carnival</em> by Beyond Booleans.
                </span>
                <span className="play-tile__cta">Play <span aria-hidden="true">&gt;&gt;</span></span>
              </a>
            </div>
            <p className="play-more__lead">…or play with some computer-science theory:</p>
            <div className="play-grid">
              <a
                className="play-tile"
                href={import.meta.env.BASE_URL + 'reduction-zoo/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="play-tile__icon" aria-hidden="true">🦓</span>
                <span className="play-tile__title">Reduction Zoo</span>
                <span className="play-tile__desc">
                  Type a logic formula and watch it flow through the whole NP-complete chain —
                  SAT → 3-SAT → Independent Set → Vertex Cover → Clique.
                </span>
                <span className="play-tile__cta">Play <span aria-hidden="true">&gt;&gt;</span></span>
              </a>
              <a
                className="play-tile"
                href={import.meta.env.BASE_URL + 'turing-machine-studio/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="play-tile__icon" aria-hidden="true">🎞️</span>
                <span className="play-tile__title">Turing Machine Studio</span>
                <span className="play-tile__desc">
                  Run famous machines (including Busy Beavers) or write your own, and watch the
                  tape, head and state move.
                </span>
                <span className="play-tile__cta">Play <span aria-hidden="true">&gt;&gt;</span></span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <PixelCat variant="corner" width={112} />
      <ChatWidget />
    </>
  )
}
