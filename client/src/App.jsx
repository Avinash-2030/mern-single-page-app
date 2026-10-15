import { useEffect, useState } from 'react';
import content from './content.js';
import Contact from './Contact.jsx';

export default function App() {
  const [active, setActive] = useState('home');

  // Highlight the nav link of the section currently in view
  useEffect(() => {
    const sections = content.nav.map((n) => document.getElementById(n.id));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const { home, explore, about } = content;

  return (
    <>
      <header className="topbar">
        <a href="#home" className="brand">{content.brand}</a>
        <nav aria-label="Main">
          {content.nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={active === n.id ? 'active' : ''} aria-current={active === n.id ? 'true' : undefined}>
              {n.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        {/* HOME */}
        <section id="home" className="section hero">
          <div className="wrap">
            <h1>{home.headline}</h1>
            <p className="lead">{home.subhead}</p>
            <a className="btn" href="#contact">{home.cta}</a>
          </div>
          <div className="wrap services">
            {home.services.map((s) => (
              <div key={s.title} className="service">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPLORE */}
        <section id="explore" className="section explore">
          <div className="wrap">
            <p className="eyebrow">{explore.eyebrow}</p>
            <h2>{explore.headline}</h2>
            <p className="explore-intro">{explore.text}</p>
            <div className="product-grid">
              {explore.products.map((product) => (
                <article key={product.name} className="product-card">
                  <a className="product-image-link" href={product.link} target="_blank" rel="noreferrer" aria-label={`Shop ${product.name} online`}>
                    <img src={product.image} alt={product.imageAlt} loading="lazy" />
                  </a>
                  <div className="product-info">
                    <p className="product-category">{product.category}</p>
                    <h3>{product.name}</h3>
                    <p className="product-price">{product.price}</p>
                    <a className="product-link" href={product.link} target="_blank" rel="noreferrer">
                      Shop online <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about">
          <div className="wrap two-col">
            <div>
              <h2>{about.headline}</h2>
              {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <dl className="facts">
              {about.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.value}</dt>
                  <dd>{f.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CONTACT */}
        <Contact />
      </main>

      <footer className="footer">
        <div className="wrap">{content.footer}</div>
      </footer>
    </>
  );
}
