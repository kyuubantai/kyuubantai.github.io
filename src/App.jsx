import { useState } from 'react'
import './App.css'
import { translations } from './translations'

function App() {
  // On initialise l'état avec 'en' car c'est ton point fort (C1) 
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  return (
    <div className="portfolio">
      {/* 1. Navigation avec sélecteur de langue */}
      <nav className="navigation">
        <ul>
          <li><a href="#about">{t.nav.about}</a></li>
          <li><a href="#xp">{t.nav.xp}</a></li>
          <li><a href="#work">{t.nav.work}</a></li>
          <li><a href="#link">{t.nav.contact}</a></li>
          <li className="lang-toggle">
            <button onClick={() => setLang('en')} className={lang === 'en' ? 'active' : ''}>EN</button>
            <button onClick={() => setLang('fr')} className={lang === 'fr' ? 'active' : ''}>FR</button>
          </li>
        </ul>
      </nav>

      {/* 2. Hero Section */}
      <header className="hero-section">
        <h1>{t.hero.title}</h1>
        <h2>{t.hero.ageText}</h2> {/* [cite: 4] */}
        <p className="subtitle">{t.hero.subtitle}</p>
      </header>

      <section className="info">
        {/* 3. About Section */}
        <article id="about" className="intro">
          <h1>{t.about.title}</h1>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </article>

        {/* 4. Skills/Experience Section avec Mapping */}
        <article id="xp" className="exp">
          <h1>{t.xp.title}</h1>
          
          <div className="skills-grid">
            <div>
              <strong>{t.xp.progTitle}</strong>
              <ul>
                {t.xp.progItems.map((item, i) => <li key={i}>{item.name}: {item.score}</li>)}
              </ul>
            </div>

            <div>
              <strong>{t.xp.otherProgTitle}</strong>
              <ul>
                {t.xp.otherProgItems.map((item, i) => <li key={i}>{item.name}: {item.score}</li>)}
              </ul>
            </div>

            <div>
              <strong>{t.xp.webTitle}</strong>
              <ul>
                {t.xp.webItems.map((item, i) => <li key={i}>{item.name}: {item.score}</li>)}
              </ul>
            </div>
          </div>
        </article>

        {/* 5. Projects Section avec Filtrage */}
        <article id="work" className="work">
          <h1>{t.work.title}</h1>
          
          <h3>{t.work.indivTitle}</h3>
          <div className="projects-list">
            {t.work.projects.filter(p => p.isIndividual).map(p => (
              <div key={p.id} className="project-card">
                <a href={p.link} target="_blank" rel="noreferrer"><strong>{p.name}</strong></a>
                <p>{p.description}</p>
                <small>Tech: {p.tech} | <em>{p.status}</em></small>
              </div>
            ))}
          </div>

          <h3>{t.work.groupTitle}</h3>
          <div className="projects-list">
            {t.work.projects.filter(p => !p.isIndividual).map(p => (
              <div key={p.id} className="project-card">
                <a href={p.link} target="_blank" rel="noreferrer"><strong>{p.name}</strong></a>
                <p>{p.description}</p>
                <p><strong>Contribution:</strong> {p.contribution}</p>
                <small>Tech: {p.tech} | <em>{p.status}</em></small>
              </div>
            ))}
          </div>
        </article>

        {/* 6. Contact Section */}
        <article id="link" className="contact">
          <h1>{t.contact.title}</h1>
          <p>{t.contact.p}</p>
          <a href={`mailto:${t.contact.link}`} className="btn-email">{t.contact.link}</a> {/*  */}
        </article>
      </section>

      <footer className="bas">
        <p>© 2026 KITA Djessy-Alberto - Built with React & Vite</p>
      </footer>
    </div>
  )
}

export default App
