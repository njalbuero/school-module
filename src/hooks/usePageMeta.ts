import { useEffect } from 'react';

type PageMeta = {
  title: string;
  description?: string;
};

const SITE_TITLE = 'Functions and Importance of Education in the Society';

function setDescription(content: string) {
  let tag = document.querySelector('meta[name="description"]');

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', 'description');
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

/** Keeps the document title and description in sync with the current page. */
export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = `${title} · ${SITE_TITLE}`;

    if (description) {
      setDescription(description);
    }
  }, [title, description]);
}
