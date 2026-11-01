type Module = {
  id: number;
  title: string;
  description: string;
};

const modules: Module[] = [
  {
    id: 1,
    title: 'Module 1',
    description: 'Short description of what this module covers goes here.',
  },
  {
    id: 2,
    title: 'Module 2',
    description: 'Short description of what this module covers goes here.',
  },
  {
    id: 3,
    title: 'Module 3',
    description: 'Short description of what this module covers goes here.',
  },
  {
    id: 4,
    title: 'Module 4',
    description: 'Short description of what this module covers goes here.',
  },
  {
    id: 5,
    title: 'Module 5',
    description: 'Short description of what this module covers goes here.',
  },
  {
    id: 6,
    title: 'Module 6',
    description: 'Short description of what this module covers goes here.',
  },
];

export default function Modules() {
  return (
    <section>
      <h1 className="page-title">Modules</h1>
      <p className="page-intro">
        Placeholder overview of the modules in this project. Each card is just a
        title and a one-line description for now.
      </p>

      <ul className="module-grid">
        {modules.map((module) => (
          <li key={module.id}>
            <article className="module-card">
              <span className="module-number">Module {module.id}</span>
              <h2>{module.title}</h2>
              <p>{module.description}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
