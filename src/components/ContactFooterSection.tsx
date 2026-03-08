import "./contact-footer.css";

export default function ContactFooterSection() {
  return (
    <section className="contact-root">
      <header className="contact-header">
        <span>03</span>
        <span>get_in_touch</span>
      </header>

      <div className="contact-content">
        <p className="tag">// let's build something together</p>
        <h2>have a project in mind? let's talk.</h2>
        <p className="desc">
          i'm currently available for freelance work and
          open to discussing full-time opportunities.
        </p>
        <button type="button">✉ say_hello@alex.dev →</button>
        <p className="socials">github · twitter · linkedin · dribbble</p>
      </div>

      <footer className="footer-block">
        <div>
          <h4>~ alex.chen</h4>
          <p>creative developer crafting digital experiences from nothing.</p>
        </div>
        <div>
          <small>// navigation</small>
          <p>work</p><p>about</p><p>skills</p><p>contact</p>
        </div>
        <div className="right">
          <p>© 2026 alex chen</p>
          <p>built with nothing but code.</p>
        </div>
      </footer>
    </section>
  );
}
