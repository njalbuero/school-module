import { useId, useState } from 'react';
import { Icon } from '../ui/Icon';

export type RubricLevel = {
  score: number;
  label: string;
  description: string;
};

export type RubricCriterion = {
  criterion: string;
  levels: RubricLevel[];
};

export function RubricAccordion({ items }: { items: RubricCriterion[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId().replace(/:/g, '');

  return (
    <div className="rubric-accordion">
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const triggerId = `${baseId}-trigger-${index}`;

        return (
          <div
            className={`rubric-acc-item${isOpen ? ' is-open' : ''}`}
            key={item.criterion}
          >
            <button
              type="button"
              id={triggerId}
              className="rubric-acc-trigger"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="rubric-acc-heading">
                <span className="rubric-acc-number">{index + 1}</span>
                <span className="rubric-acc-title">{item.criterion}</span>
              </span>
              <span className="rubric-acc-meta">
                <span className="rubric-acc-points">4 pts</span>
                <span className="rubric-acc-chevron" aria-hidden="true">
                  <Icon name="chevron-down" size={18} />
                </span>
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className="rubric-acc-panel"
              hidden={!isOpen}
            >
              <ul className="rubric-acc-levels">
                {item.levels.map((level) => (
                  <li className="rubric-acc-level" key={level.score}>
                    <span className="rubric-acc-score">{level.score}</span>
                    <span className="rubric-acc-level-body">
                      <span className="rubric-acc-level-label">
                        {level.label}
                      </span>
                      <span className="rubric-acc-level-desc">
                        {level.description}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
