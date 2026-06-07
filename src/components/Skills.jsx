import { useLang } from '../context/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Skills.css'

function Skills() {
  const { t } = useLang()
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="skills" id="skills">
      <div ref={ref} className={`skills-inner reveal ${isVisible ? 'visible' : ''}`}>
        <span className="eyebrow">{t.skills.eyebrow}</span>
        <h2 className="section-title">
          {t.skills.title} <span className="accent">{t.skills.titleAccent}</span>
        </h2>
        <p className="section-desc">{t.skills.desc}</p>

        <div className="skills-groups">

          <div className="skill-group">
            <span className="skill-category">{t.skills.frontend}</span>
            <div className="skill-items">
              <span className="skill-pill">React</span>
              <span className="skill-pill">JavaScript</span>
              <span className="skill-pill">HTML</span>
              <span className="skill-pill">CSS</span>
            </div>
          </div>

          <div className="skill-group">
            <span className="skill-category">{t.skills.backend}</span>
            <div className="skill-items">
              <span className="skill-pill">Node.js</span>
              <span className="skill-pill">Express</span>
              <span className="skill-pill">FastAPI</span>
              <span className="skill-pill">Python</span>
              <span className="skill-pill">Java</span>
              <span className="skill-pill">REST APIs</span>
            </div>
          </div>

          <div className="skill-group">
            <span className="skill-category">{t.skills.databases}</span>
            <div className="skill-items">
              <span className="skill-pill">MongoDB</span>
              <span className="skill-pill">Firebase</span>
            </div>
          </div>

          <div className="skill-group">
            <span className="skill-category">{t.skills.tools}</span>
            <div className="skill-items">
              <span className="skill-pill">Git</span>
              <span className="skill-pill">GitHub</span>
              <span className="skill-pill">Jest</span>
              <span className="skill-pill">Postman</span>
              <span className="skill-pill">VS Code</span>
            </div>
          </div>

          <div className="skill-group">
            <span className="skill-category">{t.skills.soft}</span>
            <div className="skill-items">
              <span className="skill-pill">{t.skills.softItems.team}</span>
              <span className="skill-pill">{t.skills.softItems.communication}</span>
              <span className="skill-pill">{t.skills.softItems.timeManagement}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills