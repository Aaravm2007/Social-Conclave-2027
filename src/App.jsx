import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Agenda from './components/Agenda.jsx'
import Schedule from './components/Schedule.jsx'
import WhySocialConclave from './components/WhySocialConclave.jsx'
import Dignitaries from './components/People.jsx'
import StudyGuides from './components/StudyGuides.jsx'
import Partners from './components/Partners.jsx'
import Submission from './components/Submission.jsx'
import Register from './components/Register.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Agenda />
        <Schedule />
        <WhySocialConclave />
        <Dignitaries />
        <StudyGuides />
        <Partners />
        <Submission />
        <Register />
      </main>
      <Footer />
    </>
  )
}