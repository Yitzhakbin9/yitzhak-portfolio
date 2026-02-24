import { data } from "../data";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section className="section reveal" id="skills" ref={ref}>
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {data.skills.map((skill, i) => (
          <span className="skill-tag" key={i}>{skill}</span>
        ))}
      </div>
    </section>
  );
}
