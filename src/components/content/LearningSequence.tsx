import { LEARNING_SEQUENCE } from '../../content/module';

export function LearningSequence() {
  return (
    <ol className="step-list learning-sequence-list">
      {LEARNING_SEQUENCE.map((stage) => (
        <li key={stage.step}>
          <span className="step-title">{stage.name}</span>
          {stage.description}
        </li>
      ))}
    </ol>
  );
}
