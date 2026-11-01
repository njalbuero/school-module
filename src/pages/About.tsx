export default function About() {
  return (
    <section>
      <h1 className="page-title">About</h1>
      <p className="page-intro">
        A short introduction to the project, the course, and why it exists.
      </p>

      <div className="prose">
        <p>
          This is placeholder body copy. Use this space to explain the purpose of
          the project: the problem it looks at, the approach taken, and what a
          reader should expect to find in the modules.
        </p>
        <p>
          A second paragraph can cover the background &mdash; for example the
          course it was built for, the methods used, or the scope and limitations
          of the work. Everything on this page is text, so it is easy to replace
          later.
        </p>
        <p>Things worth mentioning:</p>
        <ul>
          <li>What the project is for</li>
          <li>Who it is aimed at</li>
          <li>How the modules are organised</li>
        </ul>
      </div>
    </section>
  );
}
