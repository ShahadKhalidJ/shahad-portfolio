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
              <div className="skill-item">
                <i className="devicon-react-original colored"></i>
                <span>React</span>
              </div>
              <div className="skill-item">
                <i className="devicon-javascript-plain colored"></i>
                <span>JavaScript</span>
              </div>
              <div className="skill-item">
                <i className="devicon-html5-plain colored"></i>
                <span>HTML</span>
              </div>
              <div className="skill-item">
                <i className="devicon-css3-plain colored"></i>
                <span>CSS</span>
              </div>
            </div>
          </div>

          <div className="skill-group">
            <span className="skill-category">{t.skills.backend}</span>
            <div className="skill-items">
              <div className="skill-item">
                <i className="devicon-nodejs-plain colored"></i>
                <span>Node.js</span>
              </div>
              <div className="skill-item">
                <i className="devicon-express-original skill-icon-mono"></i>
                <span>Express</span>
              </div>
              <div className="skill-item">
                <i className="devicon-fastapi-plain colored"></i>
                <span>FastAPI</span>
              </div>
              <div className="skill-item">
                <i className="devicon-python-plain colored"></i>
                <span>Python</span>
              </div>
              <div className="skill-item">
                <i className="devicon-java-plain colored"></i>
                <span>Java</span>
              </div>
              <div className="skill-item">
                <i className="ti ti-api skill-icon-tabler"></i>
                <span>REST APIs</span>
              </div>
            </div>
          </div>

          <div className="skill-group">
            <span className="skill-category">{t.skills.databases}</span>
            <div className="skill-items">
              <div className="skill-item">
                <i className="devicon-mongodb-plain colored"></i>
                <span>MongoDB</span>
              </div>
              <div className="skill-item">
                <i className="devicon-firebase-plain colored"></i>
                <span>Firebase</span>
              </div>
            </div>
          </div>

          <div className="skill-group">
            <span className="skill-category">{t.skills.tools}</span>
            <div className="skill-items">
              <div className="skill-item">
                <i className="devicon-git-plain colored"></i>
                <span>Git</span>
              </div>
              <div className="skill-item">
                <i className="devicon-github-original skill-icon-mono"></i>
                <span>GitHub</span>
              </div>
              <div className="skill-item">
                <i className="devicon-jest-plain colored"></i>
                <span>Jest</span>
              </div>
              <div className="skill-item">
                <i className="devicon-postman-plain colored"></i>
                <span>Postman</span>
              </div>
              <div className="skill-item">
                <i className="devicon-vscode-plain colored"></i>
                <span>VS Code</span>
              </div>
            </div>
          </div>

          <div className="skill-group">
            <span className="skill-category">{t.skills.soft}</span>
            <div className="skill-items">
              <div className="skill-item">
                <i className="ti ti-users skill-icon-tabler"></i>
                <span>{t.skills.softItems.team}</span>
              </div>
              <div className="skill-item">
                <i className="ti ti-message-circle-2 skill-icon-tabler"></i>
                <span>{t.skills.softItems.communication}</span>
              </div>
              <div className="skill-item">
                <i className="ti ti-clock-hour-4 skill-icon-tabler"></i>
                <span>{t.skills.softItems.timeManagement}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills