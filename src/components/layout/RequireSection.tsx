import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import type { SectionId } from '../../content/module';
import { useProgress } from '../../context/ProgressContext';

/**
 * Keeps a section unavailable until its prerequisite is complete. Unlocked
 * sections remain available to revisit at any time.
 */
export function RequireSection({
  id,
  children,
}: {
  id: SectionId;
  children: ReactNode;
}) {
  const { isUnlocked } = useProgress();

  if (!isUnlocked(id)) {
    return <Navigate to="/module" replace />;
  }

  return <>{children}</>;
}
