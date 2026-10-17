function FalMark() {
  return (
    <svg
      aria-label="fal"
      className="brand-mark"
      viewBox="0 0 107 43"
      role="img"
    >
      <path
        fill="currentColor"
        d="M20.5 0 27 6.5h9L42.5 0 49 6.5v9l6.5 6.5-6.5 6.5v9L42.5 44 36 37.5h-9L20.5 44 14 37.5v-9L7.5 22 14 15.5v-9L20.5 0Zm11 10.5a11.5 11.5 0 1 0 0 23 11.5 11.5 0 0 0 0-23Z"
      />
      <path
        fill="currentColor"
        d="M54 8h8v28h-8V8Zm17 0h8v28h-8V8Zm8 0h17v7H79V8Zm0 11h14v7H79v-7Zm0 10h17v7H79v-7Z"
      />
    </svg>
  );
}

function App() {
  return (
    <main className="landing-page">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="fal home">
          <FalMark />
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#products">Products</a>
          <a href="#documentation">Documentation</a>
          <a href="#pricing">Pricing</a>
          <a href="#enterprise">Enterprise</a>
          <a href="#resources">Resources</a>
        </nav>

        <div className="header-actions">
          <a className="button button-outline header-sales" href="#contact">
            Contact Sales
          </a>
          <a className="button button-dark header-login" href="#login">
            Login
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-content">
          <h1>
            Generative
            <br />
            media platform
            <br />
            for developers.
          </h1>
          <p>
            The world&apos;s best generative image, video, and audio models,
            <br className="desktop-break" />
            all in one place. Develop and fine-tune models with
            <br className="desktop-break" />
            serverless GPUs and on-demand clusters.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#get-started">
              Get started
            </a>
            <a className="button button-outline" href="#contact">
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
