export const FOOTER_STATS = [
  { value: "2,400+", label: "Learners" },
  { value: "3", label: "Tracks" },
  { value: "1", label: "Mission" },
] as const;

export const FOOTER_SIGNALS = [
  {
    color: "#ff6b6b",
    text: "Cohort 4 now open — only 12 seats left.",
  },
  {
    color: "#a855f7",
    text: "YouTube Academy batch filling fast.",
  },
  {
    color: "#00d4ff",
    text: "Drone Engineering launches next month.",
  },
] as const;

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "Programs", hash: "programs" },
  { label: "Features", hash: "why" },
  { label: "About", hash: "community" },
  { label: "Contact", hash: "contact" },
] as const;

export const FOOTER_LEGAL = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Refund Policy", href: "#refund" },
] as const;
