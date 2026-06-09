import { useLang } from '../context/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Projects.css'

function Projects({ openProjectModal }) {
  const { t } = useLang()
  const { ref, isVisible } = useScrollReveal()

  const items = t.projects.items

  return (
    <section className="projects" id="projects">
      <div ref={ref} className={`projects-inner reveal ${isVisible ? 'visible' : ''}`}>
        <span className="eyebrow">{t.projects.eyebrow}</span>
        <h2 className="section-title">
          {t.projects.title} <span className="accent">{t.projects.titleAccent}</span>
        </h2>
        <p className="section-desc">{t.projects.desc}</p>

        <div className="projects-grid">
          {Object.entries(items).map(([key, project]) => (
            <article key={key} className="project-card">
              <div className="project-preview project-preview-image">
                <img src={project.image} alt={project.alt} />
              </div>

              <div className="project-body">
                <div className="project-meta">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-sub">{project.sub}</span>
                </div>

                <p className="project-tagline">{project.tagline}</p>

                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <button onClick={() => openProjectModal(key)} className="view-details">
                    {t.projects.viewDetails} <i className="ti ti-arrow-right"></i>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="more-soon">{t.projects.moreSoon}</p>
      </div>
    </section>
  )
}

export default Projects