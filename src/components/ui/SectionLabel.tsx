import type { ReactNode } from "react";
import styles from "./SectionLabel.module.css";

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
};

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p className={`${styles.label} ${className}`.trim()}>{children}</p>
  );
}
