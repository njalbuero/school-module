import type { ReactNode } from 'react';

export type IconName =
  | 'clock'
  | 'book'
  | 'grid'
  | 'user'
  | 'play'
  | 'arrow-right'
  | 'lightbulb'
  | 'clipboard'
  | 'chat'
  | 'sparkle'
  | 'compass';

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

const PATHS: Record<IconName, ReactNode> = {
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 1.8" />
    </>
  ),
  book: (
    <>
      <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3H20v15.5H5.5A2.5 2.5 0 0 0 3 21V5.5Z" />
      <path d="M3 18.5A2.5 2.5 0 0 1 5.5 16H20" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </>
  ),
  play: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M10.2 8.6l5 3.4-5 3.4V8.6Z" fill="currentColor" stroke="none" />
    </>
  ),
  'arrow-right': (
    <>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </>
  ),
  lightbulb: (
    <>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.8.6 1.5 1.5 1.5 2.6h4c0-1.1.7-2 1.5-2.6A6 6 0 0 0 12 3Z" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4a3 3 0 0 1 6 0" />
      <path d="M9 11l2 2 4-4" />
    </>
  ),
  chat: (
    <>
      <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.9 8.9 0 0 1-4.2-1L3 20l1-4.8A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M8.5 10.5h7M8.5 13.5h4" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
      <path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5 5-2Z" />
    </>
  ),
};

export function Icon({ name, size = 24, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
