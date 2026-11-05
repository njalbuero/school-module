import { LEARNING_SEQUENCE } from '../../content/module';

export function LearningSequence({
  variant = 'table',
}: {
  variant?: 'table' | 'list';
}) {
  if (variant === 'list') {
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

  return (
    <div className="sequence-table-wrap">
      <table className="sequence-table">
        <caption className="sr-only">
          Learning sequence and what you will do in each stage
        </caption>
        <thead>
          <tr>
            <th scope="col">Learning sequence</th>
            <th scope="col">What you will do</th>
          </tr>
        </thead>
        <tbody>
          {LEARNING_SEQUENCE.map((stage) => (
            <tr key={stage.step}>
              <th scope="row">
                {stage.step}. {stage.name}
              </th>
              <td data-label="What you will do">{stage.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
