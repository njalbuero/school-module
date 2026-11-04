import { AUTHOR } from '../../content/module';
import { Placeholder } from './Placeholder';

function AuthorPhoto() {
  return (
    <figure className="author-photo">
      <div className="avatar" aria-hidden="true">
        <svg viewBox="0 0 64 64" width="48" height="48" focusable="false">
          <circle cx="32" cy="24" r="12" fill="currentColor" opacity="0.55" />
          <path
            d="M10 58c0-12 10-20 22-20s22 8 22 20"
            fill="currentColor"
            opacity="0.35"
          />
        </svg>
      </div>
      <figcaption>
        {AUTHOR.photo ? AUTHOR.photoAlt ?? 'Author photo' : 'Photo not supplied'}
      </figcaption>
    </figure>
  );
}

export function AuthorCard() {
  return (
    <div className="card author">
      <AuthorPhoto />

      <div className="author-body">
        <h3 className="author-name">
          {AUTHOR.name ?? '[Author name — to be supplied]'}
        </h3>

        {AUTHOR.bio ? (
          <p>{AUTHOR.bio}</p>
        ) : (
          <Placeholder label="Biography — placeholder">
            <p>
              A short biography of the author belongs here. It has not been
              supplied yet, and one is not written on the author&apos;s behalf.
            </p>
          </Placeholder>
        )}

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
