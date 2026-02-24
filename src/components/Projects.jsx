import { data } from "../data";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section className="section reveal" id="projects" ref={ref}>
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {data.projects.map((project, i) => (
          <div className="project-card" key={i}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t, j) => (
                <span className="tech-tag" key={j}>{t}</span>
              ))}
            </div>
            <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
              GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
