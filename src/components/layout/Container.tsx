import type { ReactNode } from "react";
import styles from "./Container.module.css";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "header" | "nav" | "main";
};

export function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return <Tag className={`${styles.container} ${className}`.trim()}>{children}</Tag>;
}
