import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
} & Omit<ComponentPropsWithoutRef<"button">, "children" | "onClick">;

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  type = "button",
  onClick,
  ...props
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a className={classes} href={href} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
