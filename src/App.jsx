import { useState } from 'react'
import './App.css'
import { translations } from './translations'

function App() {
  // On initialise l'état avec 'en' car c'est ton point fort (C1) 
  const [lang, setLang] = useState('en');
  const [status, setStatus] = useState(""); // État pour le message Formspree
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[lang];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xvzzorlp", {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className="portfolio">
      {/* 1. Navigation avec sélecteur de langue */}
      <nav className="navigation">
      {/* Bouton Hamburger pour mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* On ajoute la classe 'active' si le menu est ouvert */}
      <ul className={isMenuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</a></li>
        <li><a href="#xp" onClick={() => setIsMenuOpen(false)}>{t.nav.xp}</a></li>
        <li><a href="#work" onClick={() => setIsMenuOpen(false)}>{t.nav.work}</a></li>
        <li><a href="#link" onClick={() => setIsMenuOpen(false)}>{t.nav.contact}</a></li>
        <li className="lang-toggle">
          <button onClick={() => setLang('en') + setIsMenuOpen(false)} className={lang === 'en' ? 'active' : ''}>EN</button>
          <button onClick={() => setLang('fr') + setIsMenuOpen(false)} className={lang === 'fr' ? 'active' : ''}>FR</button>
        </li>
      </ul>
      <div className="réseaux">
        <a href='https://github.com/kyuubantai'>
         <img src='data/github-mark-white.svg'></img>
        </a>
        <a href='www.linkedin.com/in/djessy-alberto-kita-15269b2a7'>
        <img src='data/InBug-White.png'></img>
        </a>
      </div>
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

            <div>
              <strong>{t.xp.toolsTitle}</strong>
              <ul>
                {t.xp.toolsItems.map((item, i) => <li key={i}>{item.name}: {item.score}</li>)}
              </ul>
            </div>
            <div>
              <strong>{t.xp.softTitle}</strong>
              <ul>
                {t.xp.softItems.map((item, i) => <li key={i}>{item.name}: {item.score}</li>)}
              </ul>
            </div>
            <div>
              <strong>{t.xp.languageTitle}</strong>
              <ul>
                {t.xp.languageItems.map((item, i) => <li key={i}>{item.name}: {item.score}</li>)}
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

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="email">{t.contact.emailLabel}</label>
          <input type="email" name="email" id="email" required placeholder="example@mail.com" />
        </div>

        <div className="form-group">
          <label htmlFor="message">{t.contact.messageLabel}</label>
          <textarea name="message" id="message" required rows="5"></textarea>
        </div>

        <button type="submit" className="btn-submit">{t.contact.send}</button>

        {/* Affichage des messages de statut */}
        {status === "SUCCESS" && <p className="status-msg success">{t.contact.success}</p>}
        {status === "ERROR" && <p className="status-msg error">{t.contact.error}</p>}
      </form>

      <p className="alternative-contact">
        Mail : <a href={`mailto:${t.contact.link}`}>{t.contact.link}</a>
      </p>
    </article>
      </section>

      <footer className="bas">
        <p>© 2026 KITA Djessy-Alberto - Built with React & Vite</p>
      </footer>
    </div>
  )
}

export default App
