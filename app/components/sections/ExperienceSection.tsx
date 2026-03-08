import type { SectionConfig } from "./types";
import "./experience-section.css";

const ExperienceSection: SectionConfig = {
  label: "02 // experience",
  lines: [
    "// experience",
    "",
    "medical informatics eng. — 2025",
    "built MedQuery, clinical AI assistant.",
    "3 MCP servers, 28 medical tools.",
    "BioClinicalBERT entity extraction.",
    "patient analytics dashboard in React.",
    "6 Docker services, k8s autoscaler in Go.",
    "",
    "accenture, SE — 2022-2023",
    "SaaS platform, React/TS frontend.",
    "14 REST endpoints, Spring Boot backend.",
    "load time 4.2s → 1.6s.",
    "87% test coverage before first deploy.",
    "",
    "accenture, ASE — 2021",
    "retail e-commerce, 12k SKUs.",
    "checkout flow, Stripe integration.",
    "page load 3.8s → 2.3s.",
    "140+ tests across cart and catalog.",
  ],
  fontSizeBase: 15,
  lineHeight: 1.5,
  letterSpacing: 1,
};

export default ExperienceSection;
