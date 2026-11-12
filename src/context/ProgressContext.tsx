import { createContext, useCallback, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';
import {
  PROGRESS_SECTIONS,
  SECTION_PREREQUISITES,
} from '../content/module';
import type { SectionId } from '../content/module';
import { useLocalStorage } from '../hooks/useLocalStorage';

export type ScoreRecord = {
  best: number;
  total: number;
  attempts: number;
};

export type ProgressState = {
  version: 1;
  visits: Partial<Record<SectionId, string>>;
  completions: Partial<Record<SectionId, boolean>>;
  scores: Record<string, ScoreRecord>;
  drafts: Record<string, string>;
};

const STORAGE_KEY = 'ucsp-module-progress-v1';

const initialState: ProgressState = {
  version: 1,
  visits: {},
  completions: {},
  scores: {},
  drafts: {},
};

type ProgressApi = {
  state: ProgressState;
  completedCount: number;
  totalSections: number;
  isComplete: (id: SectionId) => boolean;
  isUnlocked: (id: SectionId) => boolean;
  wasVisited: (id: SectionId) => boolean;
  markVisited: (id: SectionId) => void;
  setComplete: (id: SectionId, complete: boolean) => void;
  saveScore: (key: string, score: number, total: number) => void;
  saveDraft: (key: string, text: string) => void;
  clearDraft: (key: string) => void;
  resetAll: () => void;
};

const ProgressContext = createContext<ProgressApi | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useLocalStorage<ProgressState>(
    STORAGE_KEY,
    initialState,
  );

  const markVisited = useCallback(
    (id: SectionId) => {
      setState((current) => {
        if (current.visits[id]) {
          return current;
        }

        return {
          ...current,
          visits: { ...current.visits, [id]: new Date().toISOString() },
        };
      });
    },
    [setState],
  );

  const setComplete = useCallback(
    (id: SectionId, complete: boolean) => {
      setState((current) => ({
        ...current,
        completions: { ...current.completions, [id]: complete },
      }));
    },
    [setState],
  );

  const saveScore = useCallback(
    (key: string, score: number, total: number) => {
      setState((current) => {
        const previous = current.scores[key];
        const attempts = (previous?.attempts ?? 0) + 1;
        const best = Math.max(score, previous?.best ?? 0);

        return {
          ...current,
          scores: {
            ...current.scores,
            [key]: { best, total, attempts },
          },
        };
      });
    },
    [setState],
  );

  const saveDraft = useCallback(
    (key: string, text: string) => {
      setState((current) => ({
        ...current,
        drafts: { ...current.drafts, [key]: text },
      }));
    },
    [setState],
  );

  const clearDraft = useCallback(
    (key: string) => {
      setState((current) => {
        const drafts = { ...current.drafts };
        delete drafts[key];
        return { ...current, drafts };
      });
    },
    [setState],
  );

  const resetAll = useCallback(() => {
    setState(initialState);
  }, [setState]);

  const completedCount = useMemo(
    () => Object.values(state.completions).filter(Boolean).length,
    [state.completions],
  );

  const value = useMemo<ProgressApi>(
    () => ({
      state,
      completedCount,
      totalSections: PROGRESS_SECTIONS.length,
      isComplete: (id) => state.completions[id] === true,
      isUnlocked: (id) => {
        const prerequisite = SECTION_PREREQUISITES[id];
        return prerequisite === null || state.completions[prerequisite] === true;
      },
      wasVisited: (id) => Boolean(state.visits[id]),
      markVisited,
      setComplete,
      saveScore,
      saveDraft,
      clearDraft,
      resetAll,
    }),
    [
      state,
      completedCount,
      markVisited,
      setComplete,
      saveScore,
      saveDraft,
      clearDraft,
      resetAll,
    ],
  );

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);

  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }

  return context;
}
