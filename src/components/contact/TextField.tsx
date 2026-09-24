import type { InputHTMLAttributes } from "react";
import styles from "./fields.module.css";

type TextFieldProps = {
  id: string;
  label: string;
  focused: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export function TextField({
  id,
  label,
  focused,
  className = "",
  ...props
}: TextFieldProps) {
  return (
    <div className={styles.field}>
      <label className={styles.visuallyHidden} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className={`${styles.control} ${focused ? styles.focused : ""} ${className}`.trim()}
        {...props}
      />
    </div>
  );
}
