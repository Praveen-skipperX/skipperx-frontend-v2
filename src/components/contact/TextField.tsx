import type { InputHTMLAttributes } from "react";
import styles from "./fields.module.css";

type TextFieldProps = {
  id: string;
  label: string;
  focused: boolean;
  requiredMark?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export function TextField({
  id,
  label,
  focused,
  requiredMark = true,
  className = "",
  ...props
}: TextFieldProps) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
        {requiredMark ? <span className={styles.required}>*</span> : null}
      </label>
      <input
        id={id}
        className={`${styles.control} ${focused ? styles.focused : ""} ${className}`.trim()}
        {...props}
      />
    </div>
  );
}
