import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import PixelCat from './components/PixelCat.jsx'
import PixelAlmdudler from './components/PixelAlmdudler.jsx'
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
          </div>
        </section>
      </main>
      <Footer />
      <PixelCat variant="center" width={420} />
      <PixelAlmdudler width={64} />
      <ChatWidget />
    </>
  )
}
