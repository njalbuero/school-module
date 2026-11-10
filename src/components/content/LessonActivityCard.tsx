export function LessonActivityCard({
  title,
  intro,
  statement,
  body,
  questions,
  requirement,
  note,
}: {
  title: string;
  intro?: string[];
  statement?: string;
  body?: string[];
  questions?: string[];
  requirement?: string;
  note?: string;
}) {
  return (
    <div className="card lesson-activity">
      <h3 className="lesson-activity-title">{title}</h3>

      {intro?.map((paragraph) => (
        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
      ))}

      {statement ? (
        <blockquote className="lesson-statement">{statement}</blockquote>
      ) : null}

      {body?.map((paragraph) => (
        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
      ))}

      {questions && questions.length > 0 ? (
        <>
          <h4 className="lesson-minor-heading">
            {questions.length === 1 ? 'Guide question' : 'Guide questions'}
          </h4>
          <ol className="lesson-list">
            {questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ol>
        </>
      ) : null}

      {requirement ? (
        <p className="lesson-requirement">{requirement}</p>
      ) : null}

      {note ? <p className="field-help">{note}</p> : null}
    </div>
  );
}
