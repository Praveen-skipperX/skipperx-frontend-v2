import { useId } from "react";
import styles from "./Logo.module.css";

const X_PATH =
  "M10.776 22.4313L7.152 16.7912L3.864 22.4313H0.072L5.352 13.9832L0 5.67911H3.864L7.488 11.2952L17.1307 0L9.288 14.1032L14.64 22.4313H10.776Z";

type LogoProps = {
  size?: number;
  className?: string;
};

export function Logo({ size = 28, className = "" }: LogoProps) {
  const gradientId = useId();
  const scale = size / 24;
  const width = 17.131 * scale;
  const height = 22.431 * scale;

  return (
    <div className={`${styles.root} ${className}`.trim()} style={{ lineHeight: 1 }}>
      <span
        className={styles.wordmark}
        style={{ fontSize: `${size}px` }}
      >
        SKIPPER
      </span>
      <svg
        width={width}
        height={height}
        viewBox="0 0 17.1307 22.4313"
        fill="none"
        aria-hidden="true"
        focusable="false"
        style={{ display: "block", marginTop: `${2 * scale}px` }}
      >
        <defs>
          <linearGradient
            id={gradientId}
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="13.7295"
            x2="17.1696"
            y2="13.5738"
          >
            <stop stopColor="#FE8324" />
            <stop offset="1" stopColor="#FF4101" />
          </linearGradient>
        </defs>
        <path d={X_PATH} fill={`url(#${gradientId})`} />
      </svg>
    </div>
  );
}
