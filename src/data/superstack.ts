export type SuperStackIllustrationKey = "creator" | "tech" | "medical" | "startup";

export type SuperStackItem = {
  id: number;
  category: string;
  title: string;
  programs: string;
  ticker: string;
  categoryColor: string;
  cardBg: string;
  illustration: SuperStackIllustrationKey;
};

export const SUPERSTACK_ITEMS: SuperStackItem[] = [
  {
    id: 1,
    category: "Business",
    title: "Creator Hub",
    programs: "5 Diverse Programs",
    ticker: "Graphic Design · UI/UX · Psychology · Content Creation · Marketing Strategy",
    categoryColor: "#FE8324",
    cardBg: "#111113",
    illustration: "creator",
  },
  {
    id: 2,
    category: "Tech",
    title: "Core Tech",
    programs: "5 Diverse Programs",
    ticker: "Web Development · Artificial Intelligence · Data Science · Python · Cloud",
    categoryColor: "#22D3EE",
    cardBg: "#0D1117",
    illustration: "tech",
  },
  {
    id: 3,
    category: "Medical",
    title: "Medical Edition",
    programs: "3 Diverse Programs",
    ticker: "Genetic Engineering · Psychology · Medical Coding · General Medicine · Pharmacology",
    categoryColor: "#A78BFA",
    cardBg: "#0E0B17",
    illustration: "medical",
  },
  {
    id: 4,
    category: "Trending",
    title: "Startup-Stack",
    programs: "7 Diverse Programs",
    ticker: "Digital Marketing · Business Analytics · Human Skills · Finance · Growth Hacking",
    categoryColor: "#F472B6",
    cardBg: "#120D14",
    illustration: "startup",
  },
];
