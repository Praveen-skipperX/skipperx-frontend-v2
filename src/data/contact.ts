export const CONTACT_INTERESTS = [
  "Digitalpreneur",
  "Product Management",
  "Data Science & Analytics",
  "Psychology",
  "Web Development",
  "AR / VR Development",
  "Drone Engineering",
  "Robotics",
  "AI / Prompt Engineering",
  "Stock Market",
  "YouTube Academy",
] as const;

export type ContactInterest = (typeof CONTACT_INTERESTS)[number];

export type ContactFormValues = {
  firstName: string;
  interest: string;
  phone: string;
  email: string;
};
