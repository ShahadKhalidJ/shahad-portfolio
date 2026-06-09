import { useEffect } from 'react'
import { useLang } from '../context/LanguageContext'
import './ProjectModal.css'

function ProjectModal({ isOpen, onClose, projectKey }) {
  const { t } = useLang()

  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (e) => { if (e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen || !projectKey) return null

  const project = t.projects.items[projectKey]
  if (!project) return null

  return (
    <div className="pm-overlay" onClick={onClose}>
      <div className="pm-container" onClick={(e) => e.stopPropagation()}>

        <div className="pm-header">
          <div className="pm-title-group">
            <span className="pm-eyebrow">{t.pm.eyebrow}</span>
            <h3 className="pm-title">
              {project.title} <span className="pm-arabic">— {project.sub}</span>
            </h3>
          </div>

          <button className="pm-close-btn" onClick={onClose} aria-label={t.pm.close} title={t.pm.close}>
            <i className="ti ti-x"></i>
          </button>
        </div>

        <div className="pm-body">

          <div className="pm-section">
            <h4 className="pm-section-title">{t.pm.about}</h4>
            <p className="pm-text">{project.aboutBody}</p>
          </div>

          <div className="pm-section">
            <h4 className="pm-section-title">{t.pm.role}</h4>
            <div className="pm-role-box">
              <span className="pm-role-tag">{project.roleTag}</span>
              <p className="pm-text">{project.roleBody}</p>
            </div>
          </div>

          <div className="pm-section">
            <h4 className="pm-section-title">{t.pm.techs}</h4>
            <div className="tag-row">
              {project.modalTags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          {project.poster && (
            <div className="pm-section">
              <h4 className="pm-section-title">{t.pm.poster}</h4>
              <div className="pm-poster-frame">
                <iframe src={project.poster} title={`${project.title} conference poster`} />
              </div>
              <a href={project.poster} download className="pm-download-btn">
                <i className="ti ti-download"></i>
                <span>{t.pm.download}</span>
              </a>
            </div>
          )}

          {project.features && (
            <div className="pm-section">
              <h4 className="pm-section-title">{t.pm.features}</h4>
              <ul className="pm-features-list">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="pm-feature-item">
                    <i className="ti ti-check"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default ProjectModal