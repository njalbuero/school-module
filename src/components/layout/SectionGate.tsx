import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import type { SectionId } from '../../content/module';
import { useProgress } from '../../context/ProgressContext';
import {
  firstIncompleteSection,
  sectionIndex,
} from '../../features/progress/gating';

/**
 * Prevents direct URLs from bypassing the section order. A locked section sends
 * the learner to the first section they still need to complete.
 */
export function SectionGate({
  sectionId,
  children,
}: {
  sectionId: SectionId;
  children: ReactNode;
}) {
  const { isComplete } = useProgress();
  const firstIncomplete = firstIncompleteSection(isComplete);
  const requestedIndex = sectionIndex(sectionId);

  if (
    firstIncomplete &&
    requestedIndex > sectionIndex(firstIncomplete.id)
  ) {
    return <Navigate to={firstIncomplete.path} replace />;
  }

  return <>{children}</>;
}
