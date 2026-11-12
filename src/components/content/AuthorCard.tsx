import { AUTHOR } from '../../content/module';
import { Icon } from '../ui/Icon';

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
    <div className="card author author-card">
      <AuthorPhoto />

      <div className="author-body">
        <h3 className="author-name">{AUTHOR.name}</h3>

        {AUTHOR.role ? <p className="author-role">{AUTHOR.role}</p> : null}

        {AUTHOR.bio ? <p className="author-bio">{AUTHOR.bio}</p> : null}

        <h4 className="author-subheading">Educational background</h4>
        <ul className="education-list">
          {AUTHOR.education.map((entry) => (
            <li key={entry.programme} className="education-item">
              <span className="education-icon" aria-hidden="true">
                <Icon name="graduation-cap" />
              </span>
              <div className="education-body">
                <span className="education-programme">{entry.programme}</span>
                <span className="education-institution">
                  {entry.institution}
                  {entry.year ? ` · ${entry.year}` : ''}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
