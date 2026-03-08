import type { SectionConfig } from "./types";
import "./projects-section.css";

const ProjectsSection: SectionConfig = {
  label: "03 // projects",
  lines: [
    "// projects",
    "",
    "serverless event pipeline — AWS",
    "Lambda (Go), API Gateway, DynamoDB.",
    "CloudFormation IaC, CloudWatch.",
    "",
    "concurrent job scheduler — Go",
    "goroutines + channels, Chi router.",
    "1,200 jobs/min, zero drops.",
    "",
    "next.js e-commerce storefront",
    "SSR/ISR, Redux, Go (Gin) API.",
    "98.5 Lighthouse score on Vercel.",
    "",
    "graphql product search — Go",
    "MongoDB, Apollo Client, cursor",
    "pagination, <100ms responses.",
  ],
  fontSizeBase: 16,
  lineHeight: 1.6,
  letterSpacing: 1,
};

export default ProjectsSection;
