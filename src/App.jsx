import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import CVModal from './components/CVModal'
import ProjectModal from './components/ProjectModal'
import PageLoader from './components/PageLoader'
import './shared.css'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(false)
  const [isCVOpen, setIsCVOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(null)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  // 🥚 Console Easter Egg
  useEffect(() => {
    const styles = {
      title: 'font-size: 64px; font-weight: 700; color: #5B4FBF; font-family: Georgia, serif; line-height: 1; padding: 8px 0;',
      tagline: 'font-size: 14px; color: #2C2547; font-weight: 500; padding: 4px 0;',
      label: 'font-size: 11px; color: #6D6685; letter-spacing: 0.1em; padding-top: 8px;',
      value: 'font-size: 13px; color: #5B4FBF; font-weight: 600;',
      footer: 'font-size: 11px; color: #9B95B0; font-style: italic; padding-top: 8px;',
    }

    console.log('%cSK.', styles.title)
    console.log('%cThanks for digging into the code 👋', styles.tagline)
    console.log('%c\n// LET\'S CONNECT', styles.label)
    console.log('%cshahad.k.a.j@gmail.com', styles.value)
    console.log('%cgithub.com/ShahadKhalidJ', styles.value)
    console.log('%clinkedin.com/in/shahad-aljandal-a0a3b3305', styles.value)
    console.log('%c\nBuilt with React + Vite ✨', styles.footer)
  }, [])

  const toggleTheme = () => setIsDark(!isDark)
  const openCV = () => setIsCVOpen(true)
  const closeCV = () => setIsCVOpen(false)
  const openProjectModal = (projectKey) => setActiveProject(projectKey)
  const closeProjectModal = () => setActiveProject(null)

  return (
    <div>
      <PageLoader />
      <ScrollProgress />
      <Header isDark={isDark} toggleTheme={toggleTheme} openCV={openCV} />
      <Hero />
      <About />
      <Experience />
      <Projects openProjectModal={openProjectModal} />
      <Skills />
      <Contact />
      <Footer />
      <BackToTop />
      <CVModal isOpen={isCVOpen} onClose={closeCV} />
      <ProjectModal
        isOpen={activeProject !== null}
        onClose={closeProjectModal}
        projectKey={activeProject}
      />
    </div>
  )
}

export default App