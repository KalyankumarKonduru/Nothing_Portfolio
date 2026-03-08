import "./skills-experience.css";

type Skill = {
  name: string;
  percent: string;
  fillWidth: number;
  gradientFrom: string;
  gradientTo: string;
};

type Experience = {
  year: string;
  role: string;
  company: string;
  description: string;
  dotSize: number;
  dotColor: string;
  lineHeight: number;
  lineFrom: string;
  lineTo: string;
};

const skills: Skill[] = [
  { name: "react / next.js", percent: "95%", fillWidth: 510, gradientFrom: "#FFFFFF60", gradientTo: "#FFFFFF" },
  { name: "typescript", percent: "90%", fillWidth: 480, gradientFrom: "#FFFFFF50", gradientTo: "#FFFFFFDD" },
  { name: "node.js / express", percent: "85%", fillWidth: 450, gradientFrom: "#FFFFFF40", gradientTo: "#FFFFFFCC" },
  { name: "webgl / three.js", percent: "80%", fillWidth: 420, gradientFrom: "#FFFFFF35", gradientTo: "#FFFFFFBB" },
  { name: "figma / design systems", percent: "88%", fillWidth: 465, gradientFrom: "#FFFFFF45", gradientTo: "#FFFFFFCC" },
  { name: "rust / wasm", percent: "65%", fillWidth: 345, gradientFrom: "#FFFFFF25", gradientTo: "#FFFFFF99" },
];

const experience: Experience[] = [
  {
    year: "2024 — present",
    role: "senior creative developer",
    company: "@ void_studio",
    description: "leading the frontend architecture\nfor interactive web experiences\nand generative design tools.",
    dotSize: 8,
    dotColor: "#FFFFFF",
    lineHeight: 120,
    lineFrom: "#FFFFFF30",
    lineTo: "#FFFFFF08",
  },
  {
    year: "2021 — 2024",
    role: "frontend developer",
    company: "@ pixel_collective",
    description: "built performant web apps and\ndesign systems for startups\nacross fintech and saas.",
    dotSize: 6,
    dotColor: "#FFFFFF60",
    lineHeight: 100,
    lineFrom: "#FFFFFF20",
    lineTo: "#FFFFFF06",
  },
  {
    year: "2019 — 2021",
    role: "junior developer",
    company: "@ code_foundry",
    description: "developed responsive interfaces\nand learned the craft of clean,\nmaintainable code.",
    dotSize: 5,
    dotColor: "#FFFFFF40",
    lineHeight: 80,
    lineFrom: "#FFFFFF15",
    lineTo: "#FFFFFF04",
  },
];

export default function SkillsExperienceSection() {
  return (
    <section className="skills-exp-root">
      <header className="skills-exp-header">
        <span className="mono faint-20 tracking-4">02</span>
        <span className="mono faint-40 tracking-4 medium">skills + experience</span>
      </header>

      <div className="full-divider" />

      <div className="skills-left-led" />
      <div className="exp-left-led" />

      <div className="skills-column">
        <p className="mono faint-30 tracking-3 text-11">// tech_stack</p>

        {skills.map((s) => (
          <div className="skill-item" key={s.name}>
            <div className="skill-head">
              <span className="mono white text-12 medium">{s.name}</span>
              <span className="mono faint-30 text-11">{s.percent}</span>
            </div>
            <div className="skill-track">
              <div
                className="skill-fill"
                style={{
                  width: `${s.fillWidth}px`,
                  background: `linear-gradient(90deg, ${s.gradientFrom} 0%, ${s.gradientTo} 100%)`,
                }}
              />
            </div>
          </div>
        ))}

        <p className="mono faint-20 text-10 tools-note">
          {"// also: python · docker · aws\n   postgresql · redis · graphql"}
        </p>
      </div>

      <div className="vertical-divider" />

      <p className="mono faint-30 tracking-3 text-11 exp-label">// experience</p>

      <div className="experience-column">
        {experience.map((e) => (
          <article className="exp-item" key={e.year}>
            <div className="exp-timeline">
              <span className="exp-dot" style={{ width: e.dotSize, height: e.dotSize, background: e.dotColor }} />
              <span
                className="exp-line"
                style={{
                  height: `${e.lineHeight}px`,
                  background: `linear-gradient(180deg, ${e.lineFrom} 0%, ${e.lineTo} 100%)`,
                }}
              />
            </div>

            <div className="exp-content">
              <p className="mono text-10 tracking-2 faint-25">{e.year}</p>
              <h3 className="mono text-16 semi white">{e.role}</h3>
              <p className="mono text-12 faint-50">{e.company}</p>
              <p className="mono text-11 faint-35 multiline">{e.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="bottom-led" />
    </section>
  );
}
