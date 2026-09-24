import type { ReactNode } from "react";
import styles from "./Badge.module.css";

type BadgeProps = {
  children: ReactNode;
  pulse?: boolean;
  className?: string;
};

export function Badge({ children, pulse = false, className = "" }: BadgeProps) {
  return (
    <span className={`${styles.badge} ${className}`.trim()}>
      {pulse ? <span className={styles.dot} aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
