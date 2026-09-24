import type { CSSProperties, ComponentType } from "react";
import {
  BookOpenIcon,
  BriefcaseIcon,
  ShieldIcon,
  TrendingUpIcon,
} from "../components/nsdc/NsdcIcons";

export type NsdcMilestone = {
  id: number;
  icon: ComponentType<{ size?: number; style?: CSSProperties }>;
  title: string;
  body: string;
  accent: string;
  glow: string;
  ring: string;
};

export const NSDC_MILESTONES: NsdcMilestone[] = [
  {
    id: 1,
    icon: ShieldIcon,
    title: "NSDC Certification",
    body: "Government-backed credentials that are nationally recognised across India's top industries.",
    accent: "#FE8324",
    glow: "rgba(254,131,36,0.35)",
    ring: "rgba(254,131,36,0.15)",
  },
  {
    id: 2,
    icon: BookOpenIcon,
    title: "Quality Education",
    body: "Standardised, industry-validated curriculum built to NSDC's rigorous learning frameworks.",
    accent: "#FF8C42",
    glow: "rgba(255,140,66,0.28)",
    ring: "rgba(255,140,66,0.12)",
  },
  {
    id: 3,
    icon: BriefcaseIcon,
    title: "Better Opportunities",
    body: "A certified profile that opens doors with 500+ NSDC partner companies and recruiters.",
    accent: "#E8772E",
    glow: "rgba(232,119,46,0.25)",
    ring: "rgba(232,119,46,0.1)",
  },
  {
    id: 4,
    icon: TrendingUpIcon,
    title: "Career Growth",
    body: "Measurable salary uplift and faster promotions — backed by NSDC outcome data.",
    accent: "#FE8324",
    glow: "rgba(254,131,36,0.35)",
    ring: "rgba(254,131,36,0.15)",
  },
];

export const NSDC_CHIPS = [
  "Government of India recognised",
  "Valid across 500+ companies",
  "Skill India certified partner",
  "Industry-aligned curriculum",
];
