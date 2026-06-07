import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'
import './Header.css'

function Header({ isDark, toggleTheme, openCV }) {
  const { lang, toggleLang, t } = useLang()
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (s) => activeSection === s ? 'nav-link active' : 'nav-link'
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="header">
        <div className="logo">SK<span className="logo-dot">.</span></div>

        <nav className="nav-pill">
          <a href="#home" className={isActive('home')}>{t.nav.home}</a>
          <a href="#about" className={isActive('about')}>{t.nav.about}</a>
          <a href="#experience" className={isActive('experience')}>{t.nav.experience}</a>
          <a href="#projects" className={isActive('projects')}>{t.nav.projects}</a>
          <a href="#skills" className={isActive('skills')}>{t.nav.skills}</a>
          <a href="#contact" className={isActive('contact')}>{t.nav.contact}</a>
        </nav>

        <div className="header-actions">
          <button className="btn-cv" type="button" onClick={openCV}>
            <i className="ti ti-eye"></i>
            <span>{t.cv}</span>
          </button>

          <button className="tog" type="button" onClick={toggleLang} title={t.langSwitch} aria-label={t.langSwitch}>
            {lang === 'en' ? 'ع' : 'EN'}
          </button>

          <button className="tog" type="button" onClick={toggleTheme} aria-label="Toggle theme" title={isDark ? t.themeLight : t.themeDark}>
            <i className={isDark ? 'ti ti-sun' : 'ti ti-moon'}></i>
          </button>

          <button className="hamburger" type="button" onClick={() => setMenuOpen(true)} aria-label={t.menuOpen}>
            <i className="ti ti-menu-2"></i>
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu" onClick={closeMenu}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <button className="mobile-menu-close" onClick={closeMenu} aria-label={t.menuClose}>
              <i className="ti ti-x"></i>
            </button>
            <nav className="mobile-nav">
              <a href="#home" onClick={closeMenu}>{t.nav.home}</a>
              <a href="#about" onClick={closeMenu}>{t.nav.about}</a>
              <a href="#experience" onClick={closeMenu}>{t.nav.experience}</a>
              <a href="#projects" onClick={closeMenu}>{t.nav.projects}</a>
              <a href="#skills" onClick={closeMenu}>{t.nav.skills}</a>
              <a href="#contact" onClick={closeMenu}>{t.nav.contact}</a>
            </nav>
            <button className="btn-cv mobile-cv" type="button" onClick={() => { openCV(); closeMenu(); }}>
              <i className="ti ti-eye"></i>
              <span>{t.cv}</span>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Header