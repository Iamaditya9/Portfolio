const socialLinks = [
  {
    label: "Email",
    value: "ydaditya39@gmail.com",
    href: "mailto:ydaditya39@gmail.com",
    icon: "✉",
  },
  {
    label: "LinkedIn",
    value: "aditya-yadav-tech",
    href: "https://linkedin.com/in/aditya-yadav-tech",
    icon: "in",
  },
  {
    label: "GitHub",
    value: "Iamaditya9",
    href: "https://github.com/Iamaditya9",
    icon: "⌘",
  },
]

const technicalArsenal = {
  Languages: ["Java", "Python", "JavaScript", "TypeScript", "C++", "C#", "C", "Go", "SQL"],
  Frontend: ["React", "Vite", "Tailwind CSS", "HTML", "CSS"],
  Backend: ["Node.js", "Express.js", "Flask", "FastAPI", "Spring Boot"],
  Databases: ["MongoDB", "PostgreSQL", "SQLite", "Redis", "Firebase"],
  "Cloud & DevOps": ["Azure", "Docker", "Terraform", "GitHub Actions", "CI/CD", "Linux"],
  "Data Engineering": ["Apache Spark", "PySpark", "Kafka", "ETL", "Data Quality", "Pandas"],
  "APIs & Real-Time": ["REST APIs", "WebSockets", "Socket.IO", "WebRTC"],
  Testing: ["Pytest", "JUnit", "Postman"],
}

const businessArsenal = [
  "Entrepreneurship",
  "Requirements Analysis",
  "Product Thinking",
  "Quality Assurance",
  "Operations",
  "Process Improvement",
  "Technical Documentation",
  "Agile Development",
  "Stakeholder Communication",
  "Problem Solving",
]

const featuredProjects = [
  {
    number: "01",
    title: "IncidentFlow",
    subtitle: "Real-Time Incident Management",
    description:
      "Operational incident response dashboard with incident tracking, severity and status workflows, assignment, acknowledgement, resolution, audit timelines, REST APIs, and real-time updates.",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO", "Docker"],
    link: "https://github.com/Iamaditya9/incidentflow",
  },
  {
    number: "02",
    title: "Chatty",
    subtitle: "Real-Time Communication Platform",
    description:
      "Full-stack communication platform built around real-time messaging and peer-to-peer voice and video communication.",
    tags: ["React", "Node.js", "Socket.IO", "WebRTC", "MongoDB"],
    link: "https://github.com/Iamaditya9",
  },
  {
    number: "03",
    title: "Azure DevOps Operations Lab",
    subtitle: "Cloud & DevOps Operations",
    description:
      "Cloud and DevOps operations project combining Python automation, Azure, Terraform, Docker, FastAPI, GitHub Actions, and automated testing.",
    tags: ["Python", "Azure", "Terraform", "Docker", "GitHub Actions"],
    link: "https://github.com/Iamaditya9/azure-devops-operations-lab",
  },
  {
    number: "04",
    title: "Distributed Data Processing Pipeline",
    subtitle: "Spark-Based ETL",
    description:
      "Data processing and ETL project using Python and Apache Spark, supported by automated tests and data-quality workflows.",
    tags: ["Python", "Apache Spark", "ETL", "Pytest"],
    link: "https://github.com/Iamaditya9",
  },
]

const moreProjects = [
  {
    title: "Enterprise Analytics Pipeline",
    description: "Data engineering workflow using Spark, SQL, Azure data services, ETL, data quality checks, and automated testing.",
    tags: ["Python", "Spark", "SQL", "Azure", "ETL"],
  },
  {
    title: "Kafka Event Processing Platform",
    description: "Java event-processing platform using Kafka, Spring Boot, REST APIs, Docker, and configuration-driven services.",
    tags: ["Java", "Kafka", "Spring Boot", "Docker"],
  },
  {
    title: "Java Order Processing Service",
    description: "Backend order-processing service using Java, Spring Boot, Kafka, PostgreSQL, REST APIs, and JUnit.",
    tags: ["Java", "Spring Boot", "Kafka", "PostgreSQL"],
  },
  {
    title: "EY IT Access Control Audit",
    description: "Application-focused audit project combining Flask, SQL, Docker, CI/CD, GitHub Actions, and automated tests.",
    tags: ["Python", "Flask", "SQL", "Docker", "Pytest"],
  },
  {
    title: "Task Queue Service",
    description: "API service using FastAPI, Redis, Docker, Pytest, and REST APIs for queue-oriented backend workflows.",
    tags: ["Python", "FastAPI", "Redis", "Docker"],
  },
  {
    title: "Python Data Quality API",
    description: "Data-quality focused API built with Python, FastAPI, Docker, and Pytest.",
    tags: ["Python", "FastAPI", "Data Quality", "Pytest"],
  },
]

const experience = [
  {
    role: "Junior Software Engineer Intern",
    company: "InfoCepts",
    dates: "May 2025 — Aug 2025",
    bullets: [
      "Investigated application issues, defects, and workflow problems across enterprise software systems.",
      "Diagnosed and resolved software defects through reproduction, root-cause analysis, testing, and validation.",
      "Supported Agile development practices through technical documentation and system troubleshooting.",
    ],
  },
  {
    role: "Co-Founder & Full Stack Developer",
    company: "Arivo Homes",
    dates: "Dec 2025 — Apr 2026",
    bullets: [
      "Built full-stack property management functionality using React, Node.js, Express.js, and MongoDB.",
      "Implemented authentication, property management, search, booking workflows, notifications, and image uploads.",
      "Worked with users to understand requirements and improve application workflows.",
    ],
  },
  {
    role: "Quality Assurance Technician",
    company: "PepsiCo",
    dates: "Apr 2025 — Aug 2026",
    bullets: [
      "Performed structured quality checks and documented process deviations in a production environment.",
      "Supported corrective actions and standardized procedures to maintain process consistency.",
      "Applied attention to detail, accuracy, and quality-control practices across operational workflows.",
    ],
  },
  {
    role: "Co-Programming Lead",
    company: "ASU Food Cupboard",
    dates: "Sept 2025 — Apr 2026",
    bullets: [
      "Developed an inventory-tracking solution to reduce manual tracking effort.",
      "Translated operational requirements into practical technical workflows.",
      "Supported troubleshooting and process improvements for inventory management.",
    ],
  },
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a className="logo" href="#home" aria-label="Aditya Yadav home">
          AY
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#arsenal">Arsenal</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-cta" href="mailto:ydaditya39@gmail.com">
          Let's Talk <Arrow />
        </a>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              OPEN TO WINTER 2027 CO-OP
            </div>

            <p className="eyebrow">SOFTWARE DEVELOPER • BUILDER • PROBLEM SOLVER</p>

            <h1>
              Hi, I'm <span>Aditya Yadav.</span>
            </h1>

            <h2>I build software that solves real problems.</h2>

            <p className="hero-text">
              Applied Computer Science and Business (Co-op) student at Acadia
              University focused on software engineering, full-stack development,
              cloud technologies, data engineering, and scalable systems.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                View My Work <Arrow />
              </a>

              <a href="/resume.pdf" className="secondary-btn">
                Download Resume <span>↓</span>
              </a>
            </div>

            <div className="hero-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}
                >
                  <span className="social-mini-icon">{social.icon}</span>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="hero-profile">
            <div className="profile-orbit orbit-one" />
            <div className="profile-orbit orbit-two" />
            <div className="profile-card">
              <div className="profile-glow" />
              <img
                src="/Portfolio/profile.jpeg"
                alt="Aditya Yadav"
                className="profile-image"
              />
              <div className="profile-caption">
                <span>ADITYA YADAV</span>
                <small>Software Developer</small>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-heading">
            <p className="section-label">01 — ABOUT</p>
            <h2>Building. Learning. Improving.</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I'm an Applied Computer Science and Business (Co-op) student at
                Acadia University. I enjoy turning ideas into working software
                and continuously improving my engineering skills through
                projects, internships, entrepreneurship, and hands-on
                development.
              </p>
              <p>
                My work spans full-stack applications, real-time systems,
                backend services, cloud and DevOps workflows, and data
                engineering projects.
              </p>
            </div>

            <div className="about-facts">
              <div>
                <span>EDUCATION</span>
                <strong>Acadia University</strong>
                <small>Applied Computer Science & Business (Co-op)</small>
              </div>
              <div>
                <span>LOCATION</span>
                <strong>Wolfville, Nova Scotia</strong>
                <small>Canada · Open to relocation</small>
              </div>
              <div>
                <span>FOCUS</span>
                <strong>Software Engineering</strong>
                <small>Full-Stack · Cloud · Data · DevOps</small>
              </div>
            </div>
          </div>
        </section>

        <section className="section arivo-section">
          <div className="live-badge">
            <span />
            LIVE PRODUCTION BUILD
          </div>

          <div className="arivo-grid">
            <div className="arivo-copy">
              <p className="section-label">FEATURED PRODUCT</p>
              <h2>Arivo Homes</h2>
              <p className="arivo-lead">
                A no-brokerage rental platform connecting property owners and
                tenants directly through a full-stack web application.
              </p>

              <div className="arivo-points">
                <div><span>✓</span> Full-stack property platform</div>
                <div><span>✓</span> Authentication & property workflows</div>
                <div><span>✓</span> Search, bookings & notifications</div>
                <div><span>✓</span> Image uploads & user workflows</div>
              </div>

              <div className="arivo-actions">
                <a
                  href="https://www.arivohomes.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="primary-btn"
                >
                  Visit Live Project <Arrow />
                </a>
                <a
                  href="https://github.com/Iamaditya9"
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  GitHub <Arrow />
                </a>
              </div>
            </div>

            <a
              href="https://www.arivohomes.com/"
              target="_blank"
              rel="noreferrer"
              className="arivo-preview"
              aria-label="Visit Arivo Homes"
            >
              <div className="browser-bar">
                <span />
                <span />
                <span />
                <small>arivohomes.com</small>
              </div>
              <div className="arivo-browser-content">
                <p>VERIFIED · BROKER-FREE · SIMPLE</p>
                <h3>Find a Home That<br />Fits Your Life</h3>
                <div className="search-pill">
                  <span>⌖</span>
                  <span>Search Location</span>
                  <span>All Categories</span>
                  <b>Search</b>
                </div>
              </div>
            </a>
          </div>
        </section>

        <section id="arsenal" className="section arsenal-section">
          <div className="section-heading">
            <p className="section-label">02 — ARSENAL</p>
            <h2>Technical Arsenal</h2>
            <p>
              Technologies I have worked with across software projects,
              internships, cloud workflows, backend systems, and data
              engineering.
            </p>
          </div>

          <div className="technical-grid">
            {Object.entries(technicalArsenal).map(([category, skills]) => (
              <div className="arsenal-group" key={category}>
                <h3>{category}</h3>
                <div className="skill-list">
                  {skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="business-arsenal">
            <div>
              <p className="section-label">BUSINESS ARSENAL</p>
              <h2>Build the right thing, not just the thing.</h2>
              <p>
                My Business background complements my technical work with
                product thinking, requirements analysis, quality practices,
                operations, and process improvement.
              </p>
            </div>

            <div className="business-tags">
              {businessArsenal.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-heading projects-heading">
            <div>
              <p className="section-label">03 — PROJECTS</p>
              <h2>Featured Engineering Work</h2>
            </div>
            <a
              href="https://github.com/Iamaditya9"
              target="_blank"
              rel="noreferrer"
              className="outline-link"
            >
              View GitHub <Arrow />
            </a>
          </div>

          <div className="featured-project-grid">
            {featuredProjects.map((project) => (
              <article className="featured-project-card" key={project.title}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title}`}
                  >
                    <Arrow />
                  </a>
                </div>

                <div className="project-icon">
                  {project.title === "IncidentFlow" ? "◈" :
                    project.title === "Chatty" ? "◉" :
                    project.title === "Azure DevOps Operations Lab" ? "⌁" : "▦"}
                </div>

                <p className="project-subtitle">{project.subtitle}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project <Arrow />
                </a>
              </article>
            ))}
          </div>

          <div className="more-projects-heading">
            <p className="section-label">MORE ENGINEERING WORK</p>
            <h3>A broader look at my technical work.</h3>
          </div>

          <div className="more-projects-grid">
            {moreProjects.map((project) => (
              <article className="more-project-card" key={project.title}>
                <div className="more-project-top">
                  <span>PROJECT</span>
                  <Arrow />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="section-heading">
            <p className="section-label">04 — EXPERIENCE</p>
            <h2>Experience</h2>
          </div>

          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={`${item.company}-${item.role}`}>
                <div className="experience-meta">
                  <span>{item.dates}</span>
                </div>

                <div className="experience-content">
                  <p className="experience-company">{item.company}</p>
                  <h3>{item.role}</h3>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section">
          <div className="education-card">
            <div>
              <p className="section-label">05 — EDUCATION</p>
              <h2>Acadia University</h2>
              <p>Bachelor of Applied Computer Science & Business (Co-op)</p>
            </div>
            <div className="education-year">
              <span>EXPECTED</span>
              <strong>2028</strong>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <p className="section-label">06 — CONTACT</p>
          <h2>Let's build something.</h2>
          <p>
            I'm currently looking for Winter 2027 co-op opportunities in
            software engineering, technology, data, cloud, and related roles.
          </p>

          <div className="contact-grid">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="contact-card"
              >
                <span className="contact-icon">{social.icon}</span>
                <span>
                  <small>{social.label}</small>
                  <strong>{social.value}</strong>
                </span>
                <Arrow />
              </a>
            ))}

            <a href="/resume.pdf" className="contact-card">
              <span className="contact-icon">↓</span>
              <span>
                <small>Resume</small>
                <strong>Download CV</strong>
              </span>
              <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Aditya Yadav</p>
        <div>
          <a href="https://github.com/Iamaditya9" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/aditya-yadav-tech" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:ydaditya39@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  )
}

export default App
