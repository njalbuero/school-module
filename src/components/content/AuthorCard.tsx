import { AUTHOR } from '../../content/module';

function AuthorPhoto() {
  const photo = AUTHOR.photo;

  if (!photo) {
    return null;
  }

  return (
    <figure className="author-photo">
      <img
        className="author-portrait"
        src={photo}
        alt={AUTHOR.photoAlt ?? AUTHOR.name}
        width={271}
        height={361}
        loading="lazy"
        decoding="async"
      />
    </figure>
  );
}

export function AuthorCard() {
  return (
    <div className="card author">
      <AuthorPhoto />

      <div className="author-body">
        <h3 className="author-name">{AUTHOR.name}</h3>

        {AUTHOR.bio ? <p>{AUTHOR.bio}</p> : null}

        <h4 className="author-subheading">Educational background</h4>
        <ul className="education-list">
          {AUTHOR.education.map((entry) => (
            <li key={entry.programme}>
              <span className="education-programme">{entry.programme}</span>
              {entry.year ? (
                <span className="education-year"> · {entry.year}</span>
              ) : null}
              <span className="education-institution">{entry.institution}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
