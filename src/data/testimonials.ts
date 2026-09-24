export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  track: string;
  trackColor: string;
  outcome: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Before SkipperX, I had a business idea and zero idea how to execute it. In 12 weeks, I launched Digitalpreneur, hit ₹3L in revenue, and now I'm building my second product. No degree gave me this.",
    name: "Arjun Mehta",
    role: "Cohort 2 Graduate",
    track: "Entrepreneurs",
    trackColor: "#FF6B6B",
    outcome: "₹3L revenue in first quarter",
  },
  {
    quote:
      "I used to think drone tech was only for IIT students. SkipperX changed that. I built my first autonomous drone in week 6, and now I'm consulting for a logistics startup. Absolutely insane.",
    name: "Priya Nair",
    role: "Cohort 3 Graduate",
    track: "Innovators",
    trackColor: "#00D4FF",
    outcome: "Consulting at ₹85K/month",
  },
  {
    quote:
      "I was working a 9-5 I hated. SkipperX's Freelancing Pro track changed everything. Within 90 days of finishing, I had replaced my salary — now I work 4 days a week and earn 2x more.",
    name: "Rahul Sharma",
    role: "Cohort 1 Graduate",
    track: "Hustlers",
    trackColor: "#A855F7",
    outcome: "2x income, 4-day workweek",
  },
];

export const TESTIMONIAL_COMPANIES = [
  "Y Combinator",
  "Google",
  "Razorpay",
  "Zepto",
  "Meesho",
  "PhonePe",
];
