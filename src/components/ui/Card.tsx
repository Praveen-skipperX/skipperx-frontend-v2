import type { ReactNode } from "react";
import styles from "./Card.module.css";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <article
      className={`${styles.card} ${hover ? styles.hover : ""} ${className}`.trim()}
    >
      {children}
    </article>
  );
}
