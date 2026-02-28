"use client";

import clsx from "clsx";

export type IconName = "pizza" | "burger" | "gyros" | "phone" | "bike" | "check" | "arrow" | "menu" | "close" | "pancake" | "coffee";

interface HandIconProps {
  name: IconName;
  className?: string;
  size?: number;
}

export default function HandIcon({ name, className, size = 32 }: HandIconProps) {
  // SVG Paths with "hand-drawn" jitter
  const paths: Record<IconName, JSX.Element> = {
    pizza: (
      <>
        <path d="M16 4C10 4 6 8 6 12L16 28L26 12C26 8 22 4 16 4Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 12C8 12 12 10 16 10C20 10 24 12 24 12" strokeLinecap="round" />
        <circle cx="16" cy="18" r="2" fill="currentColor" opacity="0.5" />
        <circle cx="12" cy="14" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="20" cy="14" r="1.5" fill="currentColor" opacity="0.5" />
      </>
    ),
    burger: (
      <>
        <path d="M6 14C6 9 10 6 16 6C22 6 26 9 26 14" strokeLinecap="round" />
        <rect x="4" y="14" width="24" height="4" rx="2" strokeLinecap="round" />
        <path d="M5 18C5 18 5 24 8 26C11 28 21 28 24 26C27 24 27 18 27 18" strokeLinecap="round" />
        <path d="M8 10L10 8M16 10L16 8M24 10L22 8" strokeLinecap="round" opacity="0.5" />
      </>
    ),
    gyros: (
      <>
        <path d="M8 8C8 8 6 12 6 16C6 24 10 28 16 28C22 28 26 24 26 16C26 12 24 8 24 8" strokeLinecap="round" />
        <path d="M12 8L16 4L20 8" strokeLinecap="round" />
        <path d="M10 14L22 14" strokeLinecap="round" strokeDasharray="2 2" />
        <path d="M10 20L22 20" strokeLinecap="round" strokeDasharray="2 2" />
      </>
    ),
    pancake: (
      <>
        <ellipse cx="16" cy="20" rx="10" ry="4" strokeLinecap="round" />
        <ellipse cx="16" cy="16" rx="9" ry="3" strokeLinecap="round" />
        <ellipse cx="16" cy="12" rx="8" ry="2" strokeLinecap="round" />
        <path d="M12 10C12 8 14 6 16 6C18 6 20 8 20 10" strokeLinecap="round" />
      </>
    ),
    coffee: (
      <>
        <path d="M6 8L8 24H22L24 8" strokeLinecap="round" />
        <path d="M6 8C6 8 10 10 15 10C20 10 24 8 24 8" strokeLinecap="round" />
        <path d="M24 10C24 10 28 10 28 14C28 18 24 18 24 18" strokeLinecap="round" />
        <path d="M10 4C10 4 12 2 14 4" strokeLinecap="round" opacity="0.5" />
        <path d="M16 4C16 4 18 2 20 4" strokeLinecap="round" opacity="0.5" />
      </>
    ),
    phone: (
      <>
        <path d="M8 6C8 4 10 2 12 2H20C22 2 24 4 24 6V26C24 28 22 30 20 30H12C10 30 8 28 8 26V6Z" strokeLinecap="round" />
        <line x1="14" y1="26" x2="18" y2="26" strokeLinecap="round" />
        <path d="M12 6H20" strokeLinecap="round" strokeDasharray="1 3" />
      </>
    ),
    bike: (
      <>
        <circle cx="8" cy="20" r="5" strokeLinecap="round" />
        <circle cx="24" cy="20" r="5" strokeLinecap="round" />
        <path d="M8 20L14 10H20L24 20" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 10L12 6H16" strokeLinecap="round" />
        <path d="M20 10L18 16" strokeLinecap="round" />
      </>
    ),
    check: (
      <path d="M4 16L12 24L28 8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
    ),
    arrow: (
      <path d="M6 16H26M26 16L18 8M26 16L18 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
    ),
    menu: (
      <>
        <path d="M4 8H28" strokeLinecap="round" strokeWidth="3" />
        <path d="M4 16H28" strokeLinecap="round" strokeWidth="3" />
        <path d="M4 24H28" strokeLinecap="round" strokeWidth="3" />
      </>
    ),
    close: (
      <>
        <path d="M6 6L26 26" strokeLinecap="round" strokeWidth="3" />
        <path d="M26 6L6 26" strokeLinecap="round" strokeWidth="3" />
      </>
    )
  };

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      className={clsx("inline-block", className)}
      style={{ overflow: 'visible' }} // Allow jitter to go outside slightly
    >
      {paths[name]}
    </svg>
  );
}
