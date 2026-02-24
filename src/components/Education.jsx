import { data } from "../data";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section className="section reveal" id="education" ref={ref}>
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {data.education.map((item, i) => (
          <div className="education-item" key={i}>
            <span className="education-title">{item.title}</span>
            {item.place && <span className="education-place">{item.place}</span>}
            <span className="education-year">{item.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
