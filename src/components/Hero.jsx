import { useLang } from '../context/LanguageContext'
import './Hero.css'

function Hero() {
  const { t } = useLang()

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <h1 className="hero-title">{t.hero.name}</h1>
        <h1 className="hero-title hero-title-purple">
          {t.hero.role}<span className="cursor">|</span>
        </h1>
        <p className="hero-desc">{t.hero.tagline}</p>

        <div className="socials">
          <a href="https://github.com/ShahadKhalidJ" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <i className="ti ti-brand-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/shahad-aljandal-a0a3b3305" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <i className="ti ti-brand-linkedin"></i>
          </a>
          <a href="mailto:shahad.k.a.j@gmail.com" className="social-link" aria-label="Email">
            <i className="ti ti-mail"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero