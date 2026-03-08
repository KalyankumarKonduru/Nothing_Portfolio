import type { SectionConfig } from "./types";
import "./skills-section.css";

const SkillsSection: SectionConfig = {
  label: "04 // skills",
  lines: [
    "// tech_stack",
    "",
    "React / Next.js / Redux / Zustand",
    "TypeScript / JavaScript (ES6+)",
    "Java / Spring Boot / Hibernate",
    "Python / Flask / FastAPI",
    "Go / Gin / Chi",
    "",
    "Docker / Kubernetes / Helm",
    "Terraform / AWS / GKE",
    "PostgreSQL / MongoDB / Redis",
    "GraphQL / REST / OpenAPI",
    "",
    "// ai + testing",
    "OpenAI / LangChain / RAG / HuggingFace",
    "Jest / Cypress / Playwright / k6",
  ],
  fontSizeBase: 16,
  lineHeight: 1.65,
  letterSpacing: 2,
};

export default SkillsSection;
