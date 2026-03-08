import "./main-hero.css";

export default function MainHeroSection() {
  return (
    <section className="hero-root">
      <header className="hero-nav">
        <div className="hero-logo">~ alex.chen</div>
        <nav>
          <span>work</span>
          <span>about</span>
          <span>skills</span>
          <span className="active">contact</span>
        </nav>
      </header>

      <main className="hero-content">
        <p className="hero-tag">// creative developer & designer</p>
        <h2>i build digital experiences that feel nothing like the ordinary.</h2>
        <p className="hero-desc">
          full-stack developer crafting minimal, high-impact interfaces
          with obsessive attention to detail and raw aesthetics.
        </p>
        <div className="hero-cta-row">
          <button type="button">view_work →</button>
          <span>// or scroll down</span>
        </div>
      </main>

      <footer className="hero-status">
        <span>status: available for work</span>
        <span>● 2026.03</span>
      </footer>
    </section>
  );
}
