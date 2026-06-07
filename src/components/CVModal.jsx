import { useEffect } from 'react'
import { useLang } from '../context/LanguageContext'
import './CVModal.css'

function CVModal({ isOpen, onClose }) {
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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>

        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-eyebrow">{t.cvm.eyebrow}</span>
            <h3 className="modal-title">{t.cvm.title}<span className="accent">.</span></h3>
          </div>

          <div className="modal-actions">
            <a href="/shahad-cv.pdf" download className="modal-download-btn">
              <i className="ti ti-download"></i>
              <span>{t.cvm.download}</span>
            </a>
            <button className="modal-close-btn" onClick={onClose} aria-label={t.cvm.close} title={t.cvm.close}>
              <i className="ti ti-x"></i>
            </button>
          </div>
        </div>

        <div className="modal-body">
          <iframe src="/shahad-cv.pdf" title="CV Preview" className="cv-iframe" />
        </div>

      </div>
    </div>
  )
}

export default CVModal