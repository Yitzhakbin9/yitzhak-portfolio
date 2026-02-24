import { data } from "../data";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  const ref = useScrollReveal();

  return (
    <section className="section reveal" id="about" ref={ref}>
      <h2 className="section-title">About Me</h2>
      <p className="about-text">{data.summary}</p>

      <div className="experience-list">
        {data.experience.map((job, i) => (
          <div className="experience-item" key={i}>
            <div className="experience-header">
              <span className="experience-role">{job.role}</span>
              <span className="experience-company">{job.company}</span>
              <span className="experience-period">{job.period}</span>
            </div>
            <ul className="experience-bullets">
              {job.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
