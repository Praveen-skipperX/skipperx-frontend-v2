import { motion } from "motion/react";
import type { ReactNode } from "react";
import styles from "./ContactButton.module.css";

type ContactButtonProps = {
  children: ReactNode;
};

export function ContactButton({ children }: ContactButtonProps) {
  return (
    <motion.button
      type="submit"
      className={styles.button}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 40px rgba(254,131,36,0.5)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      <span className={styles.shimmer} aria-hidden="true" />
      <span className={styles.label}>{children}</span>
    </motion.button>
  );
}
