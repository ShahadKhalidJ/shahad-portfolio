import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'
import './Hero.css'

function Hero() {
  const { t, lang } = useLang()
  const [nameText, setNameText] = useState('')
  const [nameDone, setNameDone] = useState(false)
  const [roleText, setRoleText] = useState('')

  // المرحلة ١: اكتبي الاسم
  useEffect(() => {
    if (nameDone) return
    const fullName = t.hero.name

    if (nameText === fullName) {
      const timer = setTimeout(() => setNameDone(true), 700)
      return () => clearTimeout(timer)
    }

    const timer = setTimeout(() => {
      setNameText(fullName.substring(0, nameText.length + 1))
    }, 150)
    return () => clearTimeout(timer)
  }, [nameText, nameDone, t.hero.name])

  // المرحلة ٢: اكتبي الدور مرة واحدة وتوقفي
  useEffect(() => {
    if (!nameDone) return
    const fullRole = t.hero.role

    if (roleText === fullRole) return  // اكتمل، توقفي

    const timer = setTimeout(() => {
      setRoleText(fullRole.substring(0, roleText.length + 1))
    }, 145)
    return () => clearTimeout(timer)
  }, [roleText, nameDone, t.hero.role])

  // إعادة التعيين عند تبديل اللغة
  useEffect(() => {
    setNameText('')
    setNameDone(false)
    setRoleText('')
  }, [lang])

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <h1 className="hero-title">
          {nameText}
          {!nameDone && <span className="cursor">|</span>}
        </h1>
        <h1 className="hero-title hero-title-purple">
          {nameDone ? roleText : '\u00A0'}
          {nameDone && <span className="cursor">|</span>}
        </h1>
        <p className={`hero-desc hero-fade ${nameDone ? 'visible' : ''}`}>
          {t.hero.tagline}
        </p>

        <div className={`socials hero-fade ${nameDone ? 'visible' : ''}`}>
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