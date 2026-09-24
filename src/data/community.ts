export type CommunityPillar = {
  id: string;
  title: string;
  copy: string;
  color: string;
  icon: "purpose" | "alliance" | "engage" | "profile";
};

export type CommunityStat = {
  value: string;
  label: string;
  color: string;
  icon: "members" | "messages" | "growth";
};

export const COMMUNITY_PILLARS: CommunityPillar[] = [
  {
    id: "purpose",
    title: "Purpose",
    copy: "A space built for people who lead with intent and radically influence their field.",
    color: "#fe8324",
    icon: "purpose",
  },
  {
    id: "alliance",
    title: "Alliance",
    copy: "People spark meaningful conversations who build and say bring real, raw, get-to-matter.",
    color: "#00d4ff",
    icon: "alliance",
  },
  {
    id: "engage",
    title: "Engage+",
    copy: "Workshops, micro-events, story takedowns — world-level events that fuel ambition.",
    color: "#a855f7",
    icon: "engage",
  },
  {
    id: "profile",
    title: "Profile",
    copy: "People with affiliate matters who creates a meaningful circle that finds and feels well.",
    color: "#f472b6",
    icon: "profile",
  },
];

export const COMMUNITY_STATS: CommunityStat[] = [
  {
    value: "2,400+",
    label: "Members",
    color: "#fe8324",
    icon: "members",
  },
  {
    value: "500+",
    label: "Daily messages",
    color: "#00d4ff",
    icon: "messages",
  },
  {
    value: "83%",
    label: "Career growth",
    color: "#a855f7",
    icon: "growth",
  },
];

export const COMMUNITY_FEED = [
  "🔥 New internship dropped",
  "🚀 Ayesha got placed @Google",
  "💡 Weekly mentor session live",
  "🎯 Challenge: 30-day MVP",
] as const;

export const COMMUNITY_QUOTES = [
  {
    name: "Priya S.",
    role: "UX Designer",
    quote: "Got my first freelance client through the community in 3 weeks.",
  },
  {
    name: "Arjun M.",
    role: "SDE Intern @ Razorpay",
    quote: "Landed my internship after the mock interviews in the community.",
  },
  {
    name: "Sneha R.",
    role: "Startup Founder",
    quote: "Co-founders, customers, and mentors — all found here.",
  },
  {
    name: "Kabir T.",
    role: "Content Creator",
    quote: "10K followers in 2 months with the creator roadmap they gave.",
  },
] as const;
