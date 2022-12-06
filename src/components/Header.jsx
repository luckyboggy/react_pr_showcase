function Header() {
  return (
    <nav className="blue-grey darken-4">
      <div className="nav-wrapper">
        <a
          href="https://luckyboggy.github.io/react_pr_showcase"
          className="brand-logo"
        >
          React Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/luckyboggy/react_pr_showcase">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
