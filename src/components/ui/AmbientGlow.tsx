import styles from "./AmbientGlow.module.css";

type AmbientGlowProps = {
  className?: string;
};

export function AmbientGlow({ className = "" }: AmbientGlowProps) {
  return (
    <div className={`${styles.glow} ${className}`.trim()} aria-hidden="true" />
  );
}
