import type { ReactNode } from 'react';

export function Placeholder({
  label = 'Placeholder',
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <div className="placeholder">
      <p className="placeholder-label">{label}</p>
      <div className="placeholder-body">{children}</div>
    </div>
  );
}
