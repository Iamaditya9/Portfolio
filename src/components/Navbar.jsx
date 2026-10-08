import { Github, Linkedin, Mail } from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo">
          AY
        </a>

        <nav className="navbar-links">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
        </nav>

        <div className="navbar-actions">
          <a
            href="https://github.com/Iamaditya9"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          <a
            href="https://linkedin.com/in/aditya-yadav-tech"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="mailto:ydaditya39@gmail.com"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;