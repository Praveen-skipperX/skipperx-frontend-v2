import type { ReactNode } from "react";
import styles from "./ContactButton.module.css";

type ContactButtonProps = {
  children: ReactNode;
};

export function ContactButton({ children }: ContactButtonProps) {
  return (
    <button type="submit" className={styles.button}>
      <span className={styles.shimmer} aria-hidden="true" />
      <span className={styles.label}>{children}</span>
    </button>
  );
}
