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
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
        <span className={styles.required}>*</span>
      </label>
      <div className={styles.phoneRow}>
        <div
          className={`${styles.prefix} ${focused ? styles.prefixFocused : ""}`}
          aria-hidden="true"
        >
          <span className={styles.prefixText}>+91</span>
          <span className={styles.prefixRule} />
        </div>
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
    </div>
  );
}
