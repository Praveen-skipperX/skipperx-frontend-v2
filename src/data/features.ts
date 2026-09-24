export type FeatureItem = {
  number: string;
  title: string;
  body: string;
};

export type ComparisonRow = [traditional: string, skipperx: string];

export const FEATURES: FeatureItem[] = [
  {
    number: "01",
    title: "Real mentors, not professors.",
    body: "Every SkipperX mentor has built something real — a business, a product, a career worth envying. No one teaches here without proof they've done it.",
  },
  {
    number: "02",
    title: "Projects, not textbooks.",
    body: "You don't study at SkipperX — you build. Every module ends with something you can show, ship, or sell. Your portfolio grows with every class.",
  },
  {
    number: "03",
    title: "A community that pushes you.",
    body: "10,000+ peers who are building businesses, engineering tech, and grinding toward freedom. The energy is contagious — and that's the whole point.",
  },
  {
    number: "04",
    title: "Designed with industry, not academia.",
    body: "Our curriculum is built with the companies, founders, and leaders who are actually hiring. So what you learn is exactly what the world needs.",
  },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  ["Textbooks", "Live Projects"],
  ["Theory", "Mentored Practice"],
  ["Degrees", "Proof of Work"],
  ["Classroom", "Industry Network"],
  ["Wait for a job", "Build your own"],
];
