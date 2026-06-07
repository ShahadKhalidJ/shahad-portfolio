import { useLang } from '../context/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './About.css'

function About() {
  const { t } = useLang()
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="about" id="about">
      <div ref={ref} className={`about-inner reveal ${isVisible ? 'visible' : ''}`}>
        <span className="eyebrow">{t.about.eyebrow}</span>
        <h2 className="section-title">
          {t.about.title} <span className="accent">{t.about.titleAccent}</span>
        </h2>

        <p className="lead">{t.about.lead}</p>

        <div className="about-block">
          <span className="block-label">{t.about.block1Label}</span>
          <h3 className="block-title">{t.about.block1Title}</h3>
          <p className="block-body">{t.about.block1Body}</p>
        </div>

        <div className="about-block">
          <span className="block-label">{t.about.block2Label}</span>
          <h3 className="block-title">{t.about.block2Title}</h3>
          <p className="block-body">{t.about.block2Body}</p>
        </div>
      </div>
    </section>
  )
}

export default About