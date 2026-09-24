import type { InputHTMLAttributes } from "react";
import styles from "./fields.module.css";

type PhoneFieldProps = {
  id: string;
  label: string;
  focused: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export function PhoneField({
  id,
  label,
  focused,
  ...props
}: PhoneFieldProps) {
  return (
    <div className={styles.phoneRow}>
      <div className={styles.prefix} aria-hidden="true">
        <span className={styles.prefixText}>+91</span>
        <span className={styles.prefixRule} />
      </div>
      <label className={styles.visuallyHidden} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type="tel"
        inputMode="numeric"
        autoComplete="tel-national"
        className={`${styles.control} ${styles.phoneInput} ${
          focused ? styles.focused : ""
        }`}
        {...props}
      />
    </div>
  );
}
