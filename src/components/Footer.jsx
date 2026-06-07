import { useLang } from '../context/LanguageContext'
import './Footer.css'

function Footer() {
  const { t } = useLang()

  return (
    <footer className="footer">
      <p className="footer-text">{t.footer.copyright}</p>
      <p className="footer-built">{t.footer.builtWith}</p>
    </footer>
  )
}

export default Footer