import type { CSSProperties, ReactNode } from "react";

type IconProps = {
  size?: number;
  className?: string;
  style?: CSSProperties;
};

function Icon({
  size = 16,
  className = "",
  style,
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function PurposeIcon(props: IconProps) {
  return (
    <svg
      width={props.size ?? 16}
      height={props.size ?? 16}
      viewBox="0 0 16 16"
      fill="none"
      className={props.className}
      style={props.style}
      aria-hidden="true"
    >
      <path
        d="M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334Z"
        stroke="currentColor"
        strokeWidth="1.333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="1.333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 9.333A1.333 1.333 0 1 0 8 6.667a1.333 1.333 0 0 0 0 2.666Z"
        stroke="currentColor"
        strokeWidth="1.333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AllianceIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </Icon>
  );
}

export function EngageIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.59 13.51 6.83 3.98" />
      <path d="m15.41 6.51-6.82 3.98" />
    </Icon>
  );
}

export function ProfileIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3 14.5 8.5 20.5 9.5 16 13.8 17.2 20 12 17.2 6.8 20 8 13.8 3.5 9.5 9.5 8.5Z" />
    </Icon>
  );
}

export function MembersIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </Icon>
  );
}

export function MessagesIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </Icon>
  );
}

export function GrowthIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M16 7h6v6" />
      <path d="m22 7-8.5 8.5-5-5L2 17" />
    </Icon>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </Icon>
  );
}
