import logo from '../assets/logo.png';

const Summary = () => {
  const handleGithubClick = () => {
    window.open('https://github.com/Anto2441');
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="flex items-center">
            <img src={logo} alt="brevity-bot-logo" className="w-16" />
            <span className="text-2xl font-bold">Brevity Bot</span>
          </div>

          <button
            type="button"
            onClick={handleGithubClick}
            className="black-btn"
          >
            Github
          </button>
        </nav>

        <main>
          <h1 className="main-title">
            Need a summary? <br />
            Let <span className="title_gradient">Brevity Bot</span> handle it!
          </h1>
          <h2 className="description">
            Hey there! I&apos;m Brevity Bot, your friendly, open-source article
            summarizer. I&apos;ll take those lengthy articles and turn them into
            clear and concise summaries just for you. Let&apos;s simplify your
            reading together!
          </h2>
        </main>
      </header>
    </>
  );
};

export default Summary;
