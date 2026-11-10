import { PROGRESS_SECTIONS } from '../../content/module';
import type { SectionId } from '../../content/module';

export function sectionIndex(sectionId: SectionId) {
  return PROGRESS_SECTIONS.findIndex((section) => section.id === sectionId);
}

export function prerequisiteFor(sectionId: SectionId) {
  const index = sectionIndex(sectionId);
  return index > 0 ? PROGRESS_SECTIONS[index - 1] : null;
}

/**
 * A section is available when every earlier progress section is complete.
 * Completed sections remain available so learners can go back and review.
 */
export function isSectionUnlocked(
  sectionId: SectionId,
  isComplete: (id: SectionId) => boolean,
) {
  const index = sectionIndex(sectionId);

  if (index <= 0) {
    return true;
  }

  return PROGRESS_SECTIONS.slice(0, index).every((section) =>
    isComplete(section.id),
  );
}

export function firstIncompleteSection(
  isComplete: (id: SectionId) => boolean,
) {
  return (
    PROGRESS_SECTIONS.find((section) => !isComplete(section.id)) ?? null
  );
}
