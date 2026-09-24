import { CONTACT_INTERESTS } from "../../data/contact";
import styles from "./fields.module.css";

type SelectFieldProps = {
  id: string;
  label: string;
  value: string;
  focused: boolean;
  onChange: (value: string) => void;
  onFocus: () => void;
  onBlur: () => void;
};

function ChevronDownIcon() {
  return (
    <svg
      className={styles.chevron}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function SelectField({
  id,
  label,
  value,
  focused,
  onChange,
  onFocus,
  onBlur,
}: SelectFieldProps) {
  return (
    <div className={styles.field}>
      <label className={styles.visuallyHidden} htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        required
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`${styles.control} ${styles.select} ${
          value ? styles.selectFilled : styles.selectEmpty
        } ${focused ? styles.focused : ""}`}
      >
        <option value="" disabled className={styles.option}>
          Interest*
        </option>
        {CONTACT_INTERESTS.map((interest) => (
          <option key={interest} value={interest} className={styles.option}>
            {interest}
          </option>
        ))}
      </select>
      <ChevronDownIcon />
    </div>
  );
}
