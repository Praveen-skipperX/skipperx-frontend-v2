import type { ReactNode } from "react";
import styles from "./ContactButton.module.css";

type ContactButtonProps = {
  children: ReactNode;
  disabled?: boolean;
};

export function ContactButton({ children, disabled }: ContactButtonProps) {
  return (
    <button type="submit" className={styles.button} disabled={disabled}>
      <span className={styles.shimmer} aria-hidden="true" />
      <span className={styles.label}>{children}</span>
    </button>
  );
}
