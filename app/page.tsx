const features = [
  {
    number: "01",
    title: "Build quickly",
    description: "A focused App Router setup with TypeScript and sensible defaults.",
  },
  {
    number: "02",
    title: "Ship confidently",
    description: "Production scripts, linting, and a container-ready configuration.",
  },
  {
    number: "03",
    title: "Make it yours",
    description: "A lightweight foundation that is easy to extend as your idea grows.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Launchpad home">
          <span className="brand-mark">L</span>
          Launchpad
        </a>
        <a className="nav-link" href="#features">
          Explore
          <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> Next.js starter
          </p>
          <h1>
            Build something
            <em>remarkable.</em>
          </h1>
          <p className="intro">
            A simple, modern foundation for your next idea. Fast to develop,
            straightforward to deploy, and ready to grow.
          </p>
          <div className="actions">
            <a className="button button-primary" href="#features">
              Get started <span aria-hidden="true">→</span>
            </a>
            <a
              className="button button-secondary"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noreferrer"
            >
              Read the docs
            </a>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orb">
            <span>N</span>
          </div>
          <span className="spark spark-one">✦</span>
          <span className="spark spark-two">✦</span>
          <span className="dot dot-one" />
          <span className="dot dot-two" />
        </div>
      </section>

      <section className="features" id="features" aria-labelledby="features-title">
        <div className="section-heading">
          <p className="eyebrow">
            <span /> What is included
          </p>
          <h2 id="features-title">Everything you need to begin.</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <span className="feature-number">{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <a className="brand" href="#top">
          <span className="brand-mark">L</span>
          Launchpad
        </a>
        <p>Made with Next.js and a little curiosity.</p>
      </footer>
    </main>
  );
}
