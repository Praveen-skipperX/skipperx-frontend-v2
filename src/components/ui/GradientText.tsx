import type { CSSProperties, ReactNode } from "react";

type GradientTextProps = {
  children: ReactNode;
  className?: string;
};

export function GradientText({ children, className = "" }: GradientTextProps) {
  const style: CSSProperties = {
    backgroundImage: "var(--gradient-hero-text)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
  };

  return (
    <span className={className} style={style}>
      {children}
    </span>
  );
}
