import "./entry-screen.css";

export default function EntryScreenSection() {
  return (
    <section className="entry-root">
      <div className="entry-glow" />
      <div className="entry-name-wrap">
        <h1>ALEX CHEN</h1>
        <p>creative developer</p>
      </div>

      <div className="entry-hint">
        <span>⌖</span>
        <span>scratch to reveal</span>
      </div>

      <div className="entry-coord">47.3769° N, 8.5417° E</div>
      <div className="entry-version">v0.0.1</div>

      <div className="entry-led-top" />
      <div className="entry-led-bottom" />
      <div className="entry-led-left" />
      <div className="entry-led-right" />
    </section>
  );
}
