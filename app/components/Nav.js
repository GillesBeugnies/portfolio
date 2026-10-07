export default function Nav() {
  return (
    <header className="nav" id="nav">
      <a href="#top" className="nav__mark">GB</a>
      <nav className="nav__links">
        <a href="#about"><span className="coord">01</span>About</a>
        <a href="#experience"><span className="coord">02</span>Experience</a>
        <a href="#work"><span className="coord">03</span>Projects</a>
        <a href="#skills"><span className="coord">04</span>Skills</a>
        <a href="#contact"><span className="coord">05</span>Contact</a>
      </nav>
    </header>
  );
}
