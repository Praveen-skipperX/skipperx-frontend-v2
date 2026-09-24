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
    category: "Trending",
    title: "Startup Stack",
    programs: "6 Diverse Programs",
    ticker: "Human Resources · Stock Market · Psychology · Digital Marketing · Business Analytics · Growth Hacking",
    categoryColor: "#F472B6",
    cardBg: "#120D14",
    illustration: "startup",
  },
  {
    id: 3,
    category: "Tech",
    title: "Core Tech",
    programs: "5 Diverse Programs",
    ticker: "Machine Learning · Web Development · Cloud Computing · Artificial Intelligence · Data Science",
    categoryColor: "#FE8324",
    cardBg: "#14110A",
    illustration: "tech",
  },
  {
    id: 4,
    category: "Medical",
    title: "Medical Edition",
    programs: "3 Diverse Programs",
    ticker: "Genetic Engineering/Nanotechnology · Psychology · Medical Coding · General Medicine · Pharmacology",
    categoryColor: "#F472B6",
    cardBg: "#140B10",
    illustration: "medical",
  },
];
