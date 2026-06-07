import { useEffect } from 'react'
import { useLang } from '../context/LanguageContext'
import './ProjectModal.css'

function ProjectModal({ isOpen, onClose }) {
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

  if (!isOpen) return null

  return (
    <div className="pm-overlay" onClick={onClose}>
      <div className="pm-container" onClick={(e) => e.stopPropagation()}>

        <div className="pm-header">
          <div className="pm-title-group">
            <span className="pm-eyebrow">{t.pm.eyebrow}</span>
            <h3 className="pm-title">
              {t.pm.qawqaaTitle} <span className="pm-arabic">— {t.pm.qawqaaSub}</span>
            </h3>
          </div>

          <button className="pm-close-btn" onClick={onClose} aria-label={t.pm.close} title={t.pm.close}>
            <i className="ti ti-x"></i>
          </button>
        </div>

        <div className="pm-body">

          <div className="pm-section">
            <h4 className="pm-section-title">{t.pm.about}</h4>
            <p className="pm-text">{t.pm.aboutBody}</p>
          </div>

          <div className="pm-section">
            <h4 className="pm-section-title">{t.pm.role}</h4>
            <div className="pm-role-box">
              <span className="pm-role-tag">{t.pm.roleTag}</span>
              <p className="pm-text">{t.pm.roleBody}</p>
            </div>
          </div>

          <div className="pm-section">
            <h4 className="pm-section-title">{t.pm.techs}</h4>
            <div className="tag-row">
              <span className="tag">React</span>
              <span className="tag">Node.js</span>
              <span className="tag">Express</span>
              <span className="tag">MongoDB</span>
              <span className="tag">Tailwind CSS</span>
              <span className="tag">Jest</span>
              <span className="tag">Postman</span>
              <span className="tag">REST APIs</span>
            </div>
          </div>

          <div className="pm-section">
            <h4 className="pm-section-title">{t.pm.poster}</h4>
            <div className="pm-poster-frame">
              <iframe src="/qawqaa-poster.pdf" title="Qawqa'a conference poster" />
            </div>
            <a href="/qawqaa-poster.pdf" download className="pm-download-btn">
              <i className="ti ti-download"></i>
              <span>{t.pm.download}</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProjectModal