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

export default function App() {
  return (
    <>
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
            <div className="card" style={{ marginTop: '32px', maxWidth: '660px' }}>
              <div className="card__icon" aria-hidden="true">🦓</div>
              <h3 className="card__title">Reduction Zoo</h3>
              <p className="card__blurb">
                Prefer a puzzle? Type any logic formula and watch it flow through the whole
                NP-complete chain — SAT → 3-SAT → Independent Set → Vertex Cover → Clique — with your
                solution carried forward and lit up at every step. Built from scratch, runs entirely
                in your browser.
              </p>
              <a
                className="btn"
                href={import.meta.env.BASE_URL + 'reduction-zoo/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Reduction Zoo <span aria-hidden="true">&gt;&gt;</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <PixelCat variant="center" width={420} />
      <ChatWidget />
    </>
  )
}
