import { TRACKS, type TrackKey } from "./programs";
export const CP_ASSETS = {
    hero: "/career-paths/cache/9e8e32d62cffcc0c7b694da8.png",
    quoteBg: "/career-paths/cache/a05868e77af84a62fc0861b8.png",
    track: {
        entrepreneurs: "/career-paths/cache/a55113764a71c718a083276b.png",
        innovators: "/career-paths/cache/f8017d3e4900bd2727c4745b.png",
        hustlers: "/career-paths/cache/0d5d6ff75cfd258c5fdcc382.png",
    } as Record<TrackKey, string>,
    programs: ["/career-paths/cache/a55113764a71c718a083276b.png", "/career-paths/cache/9fb8a64334e9eddf5c84f46b.png", "/career-paths/cache/bf8a2e82a3d5eb8402304fa8.png", "/career-paths/cache/678fdaee78664af135b664c2.png", "/career-paths/cache/8da030540404722aeb28103e.png"],
    icons: {
        career: "/career-paths/icon-career.svg",
        users: "/career-paths/icon-users.svg",
        star: "/career-paths/icon-star.svg",
        partner: "/career-paths/icon-partner.svg",
        purpose: "/career-paths/icon-purpose.svg",
        education: "/career-paths/icon-education.svg",
        educationAlt: "/career-paths/icon-education-1.svg",
        rocket: "/career-paths/icon-rocket.svg",
        rocketAlt: "/career-paths/icon-rocket-1.svg",
        usersAlt: "/career-paths/icon-users-1.svg",
        mentor: "/career-paths/icon-track.svg",
        trophy: "/career-paths/icon-trophy.svg",
        quote: "/career-paths/icon-quote.svg",
        shine: "/career-paths/icon-shine.svg",
        chevron: "/career-paths/icon-chevron-right.svg",
        clock: "/career-paths/icon-clock.svg",
        level: "/career-paths/icon-level.svg",
        arrow: "/career-paths/icon-arrow-right-1.svg",
    },
} as const;
export const CP_HERO = {
    titleLine1: "Three tracks.",
    titleLine2: "Zero excuses.",
    body: "Every program is built around real skills, real mentors, and real outcomes. You don't study here — you build. Pick the path that matches your obsession and we'll handle the rest.",
    cta: "Find my Track",
    ctaHint: "2-min quiz · no sign-up needed",
    pills: [
        { icon: CP_ASSETS.icons.career, label: "11 Total Programs" },
        { icon: CP_ASSETS.icons.users, label: "2,400+ Active Learners" },
        { icon: CP_ASSETS.icons.star, label: "4.8 Avg. Rating" },
        { icon: CP_ASSETS.icons.partner, label: "NSDC Certified" },
    ],
} as const;
export type ProcessStep = {
    num: string;
    title: string;
    body: string;
    icon: string;
    iconSmall: string;
    side: "left" | "right";
    accent: string;
    border: string;
    fill: string;
    numColor: string;
};
export const CP_PROCESS: ProcessStep[] = [
    {
        num: "01",
        title: "Find Your Track",
        body: "Take our 2-minute quiz and pinpoint exactly which of our 3 tracks matches your goals, strengths, and ambition level.",
        icon: CP_ASSETS.icons.purpose,
        iconSmall: CP_ASSETS.icons.purpose,
        side: "left",
        accent: "#FE8324",
        border: "rgba(254,131,36,0.25)",
        fill: "rgba(254,131,36,0.08)",
        numColor: "rgba(254,131,36,0.35)",
    },
    {
        num: "02",
        title: "Join a Cohort",
        body: "Enroll in your chosen program and get matched with 15–50 driven peers who push you to perform at your highest level.",
        icon: CP_ASSETS.icons.educationAlt,
        iconSmall: CP_ASSETS.icons.education,
        side: "right",
        accent: "#FF6B6B",
        border: "rgba(255,107,107,0.28)",
        fill: "rgba(255,107,107,0.12)",
        numColor: "rgba(255,107,107,0.35)",
    },
    {
        num: "03",
        title: "Learn by Doing",
        body: "No slide decks and passive lectures. Every week you ship something real — a product, a trade, a deployment, a campaign.",
        icon: CP_ASSETS.icons.rocket,
        iconSmall: CP_ASSETS.icons.rocketAlt,
        side: "left",
        accent: "#00D4FF",
        border: "rgba(0,212,255,0.22)",
        fill: "rgba(0,212,255,0.07)",
        numColor: "rgba(0,212,255,0.35)",
    },
    {
        num: "04",
        title: "Mentor Access",
        body: "Get direct access to 50+ industry mentors for 1:1 sessions, mock interviews, and career reviews throughout the program.",
        icon: CP_ASSETS.icons.mentor,
        iconSmall: CP_ASSETS.icons.usersAlt,
        side: "right",
        accent: "#A855F7",
        border: "rgba(168,85,247,0.22)",
        fill: "rgba(168,85,247,0.14)",
        numColor: "rgba(168,85,247,0.35)",
    },
    {
        num: "05",
        title: "Launch & Win",
        body: "Graduate with a verifiable portfolio, NSDC certification, and an active SkipperX community that keeps opening doors long after.",
        icon: CP_ASSETS.icons.trophy,
        iconSmall: CP_ASSETS.icons.trophy,
        side: "left",
        accent: "#FE8324",
        border: "rgba(254,131,36,0.25)",
        fill: "rgba(254,131,36,0.08)",
        numColor: "rgba(254,131,36,0.35)",
    },
];
export const CP_QUOTE = {
    text: "You can't teach ambition. But you can put ambitious people in a room and watch what happens.\"",
    attribution: "— SkipperX Founding Philosophy",
    tracks: ["ENTREPRENEURS", "INNOVATORS", "HUSTLERS"] as const,
};
export const CP_TRACK_DETAIL: Record<TrackKey, {
    eyebrow: string;
    longDescription: string;
    pullquote: string;
}> = {
    entrepreneurs: {
        eyebrow: "BUILD EMPIRES",
        longDescription: "The Entrepreneurs track is for those who refuse to work for someone else's dream. You'll learn how to identify market gaps, build products people love, market them without burning cash, and scale to 7-figure revenues — all before anyone says you're \"qualified.\"",
        pullquote: "Every company you admire started as someone's crazy idea. You're the next one.",
    },
    innovators: {
        eyebrow: "ENGINEER TOMORROW",
        longDescription: "The Innovators track is for the builders, the tinkerers, and the technically fearless. You'll work with cutting-edge hardware and software — drones, robots, AI, AR/VR — and graduate with real projects that make employers (and investors) take notice.",
        pullquote: "The next trillion-dollar companies are being built by people who understand both hardware and software. That's you.",
    },
    hustlers: {
        eyebrow: "WIN EVERY DAY",
        longDescription: "The Hustlers track is for the relentlessly resourceful. You're not waiting for a salary hike or a lucky break — you're building income streams right now. Whether it's trading the markets with precision or building a creator empire, this track gives you the skills to generate real money on your terms.",
        pullquote: "Your bank account doesn't care about your degree. Your skills do. Start now.",
    },
};
export const CP_VALUE = {
    titleBefore: "The world doesn't reward ",
    titlePrepared: "the prepared.",
    titleMid: "It rewards ",
    titleCapable: "the capable.",
    body: "Traditional education teaches you to pass exams. SkipperX teaches you to build companies, ship products, fly drones, trade markets, and grow audiences. These are skills that pay — immediately, tangibly, and for life.",
    points: [
        {
            color: "#FE8324",
            title: "Real projects, not assignments",
            body: "Every week you ship something to the world.",
        },
        {
            color: "#00D4FF",
            title: "Industry mentors, not professors",
            body: "50+ active practitioners guide your path.",
        },
        {
            color: "#A855F7",
            title: "Community, not classrooms",
            body: "2,400+ peers who push you to your ceiling.",
        },
    ],
};
export const CP_REVIEWS = [
    {
        quote: "I used to think drone tech was only for IIT students. SkipperX changed that. I built my first autonomous drone in week 6, and now I'm consulting for a logistics startup. Absolutely insane.",
        name: "Priya Nair",
        initial: "P",
        tag: "Innovators",
        accent: "#00D4FF",
        fill: "rgba(0,212,255,0.1)",
        border: "rgba(0,212,255,0.22)",
        borderHover: "rgba(0,212,255,0.3)",
    },
    {
        quote: "Before SkipperX, I had a business idea and zero idea how to execute it. In 12 weeks, I launched Digitalpreneur, hit ₹3L in revenue, and now I'm building my second product. No degree gave me this.",
        name: "Arjun Mehta",
        initial: "A",
        tag: "Entrepreneurs",
        accent: "#FF6B6B",
        fill: "rgba(255,107,107,0.12)",
        border: "rgba(255,107,107,0.28)",
        borderHover: "rgba(255,107,107,0.35)",
    },
    {
        quote: "I was working a 9-5 I hated. SkipperX's Freelancing Pro track changed everything. Within 90 days of finishing, I had replaced my salary — now I work 4 days a week and earn 2x more.",
        name: "Rahul Sharma",
        initial: "R",
        tag: "Hustlers",
        accent: "#A855F7",
        fill: "rgba(168,85,247,0.14)",
        border: "rgba(168,85,247,0.22)",
        borderHover: "rgba(168,85,247,0.3)",
    },
] as const;
export const CP_CTA = {
    title: "Still not sure which track is right?",
    body: "Take our 2-minute career quiz and we'll match you to the track built for your goals, strengths, and ambition. No sign-up required.",
    button: "Find my Track",
    footnote: "2 minutes · Instant results · Free forever",
};
export function programImageFor(index: number): string {
    return CP_ASSETS.programs[index % CP_ASSETS.programs.length];
}
export function trackProgramCount(key: TrackKey): number {
    return TRACKS[key].programs.length;
}
