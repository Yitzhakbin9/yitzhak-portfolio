import { data } from "../data";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section className="section projects-section reveal" id="projects" ref={ref}>
      <h2 className="section-title">Projects</h2>
      <p className="section-intro projects-intro">
        A few selected builds that show both interface work and backend thinking.
        Each card gives a quick visual, the problem it solves, and the stack behind it.
      </p>
      <div className="projects-grid">
        {data.projects.map((project, i) => (
          <article className="project-card" key={i}>
            <div className="project-visual">
              <img
                className="project-image"
                src={project.image}
                alt={project.imageAlt}
                loading="lazy"
              />
            </div>

            <div className="project-content">
              <span className="project-eyebrow">{project.eyebrow}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <p className="project-highlight">{project.highlight}</p>
            </div>

            <div className="project-tech">
              {project.tech.map((t, j) => (
                <span className="tech-tag" key={j}>{t}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                GitHub
              </a>
              {project.live ? (
                <a href={project.live} target="_blank" rel="noreferrer" className="project-link project-link-secondary">
                  Live Demo
                </a>
              ) : (
                <span className="project-link project-link-muted">{project.liveLabel}</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
