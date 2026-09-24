export type TrackKey = "entrepreneurs" | "innovators" | "hustlers";

export type ProgramItem = {
  name: string;
  description: string;
  duration: string;
  level: string;
  icon: string;
  tag?: string;
};

export type TrackStat = {
  value: string;
  label: string;
};

export type Track = {
  label: string;
  tagline: string;
  description: string;
  color: string;
  colorDim: string;
  colorBorder: string;
  colorGlow: string;
  colorText: string;
  badgeBg: string;
  icon: string;
  stats: TrackStat[];
  programs: ProgramItem[];
};

export const TRACK_ORDER: TrackKey[] = [
  "entrepreneurs",
  "innovators",
  "hustlers",
];

export const TRACKS: Record<TrackKey, Track> = {
  entrepreneurs: {
    label: "Entrepreneurs",
    tagline: "Build Empires",
    description:
      "Turn ideas into income. Master the art of business in the digital age.",
    color: "#FF6B6B",
    colorDim: "rgba(255,107,107,0.12)",
    colorBorder: "rgba(255,107,107,0.28)",
    colorGlow: "rgba(255,107,107,0.06)",
    colorText: "#FF6B6B",
    badgeBg: "rgba(255,107,107,0.15)",
    icon: "🚀",
    stats: [
      { value: "5", label: "Programs" },
      { value: "₹12L+", label: "Avg. Starting Package" },
      { value: "1,200+", label: "Alumni Entrepreneurs" },
    ],
    programs: [
      {
        name: "Digitalpreneur",
        description:
          "Build & scale your digital business from zero to consistent profit.",
        duration: "12 Weeks",
        level: "Beginner–Advanced",
        icon: "💻",
        tag: "Most Popular",
      },
      {
        name: "Product Management",
        description:
          "Own the full product lifecycle — from discovery and strategy to launch and growth.",
        duration: "10 Weeks",
        level: "Intermediate",
        icon: "📦",
      },
      {
        name: "Data Science & Analytics",
        description:
          "Turn raw data into strategic decisions that drive real business outcomes.",
        duration: "14 Weeks",
        level: "Intermediate–Advanced",
        icon: "📊",
        tag: "New",
      },
      {
        name: "Psychology",
        description:
          "Understand human behaviour to influence, lead, and design better experiences.",
        duration: "8 Weeks",
        level: "Beginner",
        icon: "🧠",
      },
      {
        name: "Web Development",
        description:
          "Build professional, production-ready websites and web apps from the ground up.",
        duration: "12 Weeks",
        level: "Beginner–Intermediate",
        icon: "🌐",
      },
    ],
  },
  innovators: {
    label: "Innovators",
    tagline: "Engineer Tomorrow",
    description:
      "Build the future with bleeding-edge tech — from autonomous drones to immersive worlds.",
    color: "#00D4FF",
    colorDim: "rgba(0,212,255,0.10)",
    colorBorder: "rgba(0,212,255,0.22)",
    colorGlow: "rgba(0,212,255,0.05)",
    colorText: "#00D4FF",
    badgeBg: "rgba(0,212,255,0.12)",
    icon: "⚡",
    stats: [
      { value: "4", label: "Programs" },
      { value: "₹15L+", label: "Avg. Starting Package" },
      { value: "850+", label: "Alumni Innovators" },
    ],
    programs: [
      {
        name: "AR / VR Development",
        description:
          "Craft next-gen augmented and virtual reality experiences that truly immerse.",
        duration: "12 Weeks",
        level: "Intermediate",
        icon: "🥽",
        tag: "Most Popular",
      },
      {
        name: "Drone Engineering",
        description:
          "Design, build, and program autonomous aerial systems from scratch.",
        duration: "14 Weeks",
        level: "Intermediate",
        icon: "🚁",
        tag: "Hands-On",
      },
      {
        name: "Robotics",
        description:
          "Create intelligent robotic systems for real-world industrial and consumer applications.",
        duration: "16 Weeks",
        level: "Advanced",
        icon: "🤖",
      },
      {
        name: "AI / Prompt Engineering",
        description:
          "Master the language of AI — learn to build, fine-tune, and deploy intelligent systems.",
        duration: "10 Weeks",
        level: "Beginner–Advanced",
        icon: "✨",
        tag: "New",
      },
    ],
  },
  hustlers: {
    label: "Hustlers",
    tagline: "Win Every Day",
    description:
      "No shortcuts, only skills. Stack income streams and own your financial destiny.",
    color: "#A855F7",
    colorDim: "rgba(168,85,247,0.10)",
    colorBorder: "rgba(168,85,247,0.22)",
    colorGlow: "rgba(168,85,247,0.05)",
    colorText: "#A855F7",
    badgeBg: "rgba(168,85,247,0.14)",
    icon: "💎",
    stats: [
      { value: "2", label: "Programs" },
      { value: "₹10L+", label: "Avg. Starting Package" },
      { value: "1,050+", label: "Alumni Hustlers" },
    ],
    programs: [
      {
        name: "Stock Market",
        description:
          "Trade smarter with technical analysis, proven strategy, and disciplined risk management.",
        duration: "10 Weeks",
        level: "Intermediate",
        icon: "📈",
        tag: "Most Popular",
      },
      {
        name: "YouTube Academy",
        description:
          "Build a channel that grows on autopilot — from scripting and editing to monetisation.",
        duration: "8 Weeks",
        level: "Beginner–Advanced",
        icon: "🎬",
        tag: "New",
      },
    ],
  },
};

export type QuizOption = {
  label: string;
  emoji: string;
  track: TrackKey;
};

export type QuizQuestion = {
  id: number;
  question: string;
  subtext: string;
  options: QuizOption[];
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What gets you out of bed in the morning?",
    subtext: "Pick the one that resonates most deeply.",
    options: [
      { label: "Building something the world will pay for", emoji: "🏗️", track: "entrepreneurs" },
      { label: "Solving a problem no one has cracked yet", emoji: "🔬", track: "innovators" },
      { label: "Outworking everyone and stacking wins", emoji: "🔥", track: "hustlers" },
    ],
  },
  {
    id: 2,
    question: "Your dream workspace is…",
    subtext: "Go with your gut — no right answer here.",
    options: [
      { label: "A war room — strategy, metrics, and growth", emoji: "📊", track: "entrepreneurs" },
      { label: "A lab or studio — where things get built", emoji: "⚙️", track: "innovators" },
      { label: "Anywhere with Wi-Fi and a goal to hit", emoji: "🌍", track: "hustlers" },
    ],
  },
  {
    id: 3,
    question: "Which achievement feels most meaningful?",
    subtext: "The one you'd brag about at dinner.",
    options: [
      { label: "Taking a product from idea to ₹1 crore revenue", emoji: "💰", track: "entrepreneurs" },
      { label: 'Engineering something that makes people say "how?"', emoji: "🤖", track: "innovators" },
      { label: "Going from broke to financially free", emoji: "📈", track: "hustlers" },
    ],
  },
  {
    id: 4,
    question: "How do you handle a setback?",
    subtext: "Be honest — this reveals your core wiring.",
    options: [
      { label: "Pivot fast and find a new angle", emoji: "🎯", track: "entrepreneurs" },
      { label: "Dig deeper — the answer is in the data", emoji: "🧠", track: "innovators" },
      { label: "Double the effort, ignore the noise", emoji: "💪", track: "hustlers" },
    ],
  },
  {
    id: 5,
    question: "Five years from now, you're known as…",
    subtext: "Your future self is speaking — listen.",
    options: [
      { label: "The founder who scaled a category-defining brand", emoji: "🚀", track: "entrepreneurs" },
      { label: "The engineer who built something genuinely new", emoji: "⚡", track: "innovators" },
      { label: "The self-made one who never needed anyone's permission", emoji: "👑", track: "hustlers" },
    ],
  },
];

export const QUIZ_RESULTS: Record<
  TrackKey,
  {
    label: string;
    tagline: string;
    headline: string;
    description: string;
    color: string;
    colorDim: string;
    colorBorder: string;
    icon: string;
    programs: string[];
  }
> = {
  entrepreneurs: {
    label: "Entrepreneurs",
    tagline: "Build Empires",
    headline: "You're a Builder.",
    description:
      "You think in markets, opportunities, and leverage. You don't wait for permission — you create the table and invite others to sit. The Entrepreneurs track is built for minds like yours.",
    color: "#FF6B6B",
    colorDim: "rgba(255,107,107,0.12)",
    colorBorder: "rgba(255,107,107,0.3)",
    icon: "🚀",
    programs: [
      "Digitalpreneur",
      "E-Commerce Mastery",
      "Startup Launchpad",
      "Social Media Empire",
    ],
  },
  innovators: {
    label: "Innovators",
    tagline: "Engineer Tomorrow",
    headline: "You're an Engineer.",
    description:
      "You see systems where others see chaos. You're drawn to things that don't exist yet — and you have the obsession to build them. The Innovators track was made for thinkers who ship.",
    color: "#00D4FF",
    colorDim: "rgba(0,212,255,0.10)",
    colorBorder: "rgba(0,212,255,0.25)",
    icon: "⚡",
    programs: [
      "Drone Engineering",
      "Robot Engineering",
      "AR/VR Development",
      "AI & Machine Learning",
    ],
  },
  hustlers: {
    label: "Hustlers",
    tagline: "Win Every Day",
    headline: "You're a Hustler.",
    description:
      "You're wired for speed, results, and freedom. You don't just want success — you want it on your own terms. The Hustlers track is your blueprint for stacking skills and income streams.",
    color: "#A855F7",
    colorDim: "rgba(168,85,247,0.10)",
    colorBorder: "rgba(168,85,247,0.3)",
    icon: "💎",
    programs: [
      "Freelancing Pro",
      "Stock Market Mastery",
      "Content Creation",
      "Personal Branding",
    ],
  },
};
