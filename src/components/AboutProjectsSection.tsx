import "./about-projects.css";

const cards = [
  "project_card_1",
  "project_card_2",
  "project_card_3",
  "project_card_4",
];

export default function AboutProjectsSection() {
  return (
    <section className="about-root">
      <header className="about-header">
        <span>01</span>
        <span>about + selected_work</span>
      </header>

      <div className="about-left">
        <p className="label">// about_me</p>
        <p className="about-text">
          i'm a creative developer obsessed with the space between design and code.

          my work lives at the intersection of brutalist aesthetics and refined user experience.
        </p>
        <div className="stats">
          <div><strong>5+</strong><small>years_exp</small></div>
          <div><strong>40+</strong><small>projects</small></div>
          <div><strong>12</strong><small>clients</small></div>
        </div>
      </div>

      <div className="about-divider" />

      <div className="projects-right">
        <p className="label">// selected_work</p>
        <div className="grid">
          {cards.map((card) => (
            <article key={card}>
              <h4>{card}</h4>
              <p>details and tags</p>
            </article>
          ))}
        </div>
        <div className="view-all">view_all_projects →</div>
      </div>
    </section>
  );
}
