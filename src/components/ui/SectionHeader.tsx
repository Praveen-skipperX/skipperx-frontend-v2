import type { ReactNode } from "react";
import { SectionLabel } from "./SectionLabel";
import styles from "./SectionHeader.module.css";

type SectionHeaderProps = {
  label?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  return (
    <header
      className={`${styles.header} ${align === "center" ? styles.center : ""} ${className}`.trim()}
    >
      {label ? <SectionLabel>{label}</SectionLabel> : null}
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  );
}
