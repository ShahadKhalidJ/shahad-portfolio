import { useLang } from '../context/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Experience.css'

function Experience() {
  const { t } = useLang()
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="experience" id="experience">
      <div ref={ref} className={`experience-inner reveal ${isVisible ? 'visible' : ''}`}>
        <span className="eyebrow">{t.experience.eyebrow}</span>
        <h2 className="section-title">
          {t.experience.title} <span className="accent">{t.experience.titleAccent}</span>
        </h2>
        <p className="section-desc">{t.experience.desc}</p>

        <div className="experience-list">

          <article className="exp-card">
            <div className="exp-header">
              <h3 className="exp-title">{t.experience.stcTitle}</h3>
              <span className="exp-badge">{t.experience.stcBadge}</span>
            </div>
            <p className="exp-company">{t.experience.stcCompany}</p>
            <p className="exp-date">{t.experience.stcDate}</p>
            <p className="exp-body">{t.experience.stcBody}</p>
            <div className="tag-row">
              <span className="tag">React</span>
              <span className="tag">FastAPI</span>
              <span className="tag">Python</span>
              <span className="tag">REST APIs</span>
              <span className="tag">Internal Tools</span>
            </div>
          </article>

          <article className="exp-card">
            <div className="exp-header">
              <h3 className="exp-title">{t.experience.ksuTitle}</h3>
              <span className="exp-badge">{t.experience.ksuBadge}</span>
            </div>
            <p className="exp-company">{t.experience.ksuCompany}</p>
            <p className="exp-date">{t.experience.ksuDate}</p>
            <p className="exp-body">{t.experience.ksuBody}</p>
            <div className="tag-row">
              <span className="tag">Software Engineering</span>
              <span className="tag">Web Development</span>
              <span className="tag">Software Design</span>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}

export default Experience