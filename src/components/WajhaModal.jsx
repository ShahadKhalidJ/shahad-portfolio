import { useEffect } from 'react'
import { useLang } from '../context/LanguageContext'
import './ProjectModal.css'

function WajhaModal({ onClose }) {
  const { t } = useLang()

  useEffect(() => {
    document.body.classList.add('modal-open')
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.body.classList.remove('modal-open')
      document.removeEventListener('keydown', handleEsc)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const project = t.projects.items.wajha
  if (!project) return null

  const { sections } = project
  const hasActions = project.liveUrl || project.githubUrl

  return (
    <div className="pm-overlay" onClick={onClose}>
      <div className="pm-modal" onClick={(e) => e.stopPropagation()}>
        <button className="pm-close" onClick={onClose} aria-label={t.projects.closeAriaLabel}>
          <i className="ti ti-x"></i>
        </button>

        <div className="pm-content">
          <h2 className="pm-title">{project.title}</h2>
          <p className="pm-tagline">{project.tagline}</p>

          {hasActions && (
            <div className="pm-actions">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="pm-action-btn pm-action-primary">
                  <i className="ti ti-external-link"></i>
                  <span>{t.projects.viewLive}</span>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="pm-action-btn">
                  <i className="ti ti-brand-github"></i>
                  <span>{t.projects.viewCode}</span>
                </a>
              )}
            </div>
          )}

          {sections.about && (
            <section className="pm-section">
              <span className="pm-section-label">{sections.about.label}</span>
              <p className="pm-section-text">{sections.about.text}</p>
            </section>
          )}

          {sections.role && (
            <section className="pm-section">
              <span className="pm-section-label">{sections.role.label}</span>
              <div className="pm-role-box">
                <strong className="pm-role-title">{sections.role.subtitle}</strong>
                <p className="pm-section-text">{sections.role.text}</p>
              </div>
            </section>
          )}

          {sections.tech && (
            <section className="pm-section">
              <span className="pm-section-label">{sections.tech.label}</span>
              <div className="pm-tech-list">
                {sections.tech.items.map((item) => (
                  <span key={item} className="pm-tech-tag">{item}</span>
                ))}
              </div>
            </section>
          )}

          {sections.features && (
            <section className="pm-section">
              <span className="pm-section-label">{sections.features.label}</span>
              <ul className="pm-features-list">
                {sections.features.items.map((item, i) => (
                  <li key={i} className="pm-feature-item">{item}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

export default WajhaModal