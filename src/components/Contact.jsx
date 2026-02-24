import { data } from "../data";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contact() {
  const ref = useScrollReveal();
  const { email, github, linkedin } = data.contact;

  return (
    <section className="section reveal" id="contact" ref={ref}>
      <h2 className="section-title">Contact</h2>
      <p className="contact-sub">Feel free to reach out — I'm open to new opportunities.</p>
      <div className="contact-links">
        <a href={`mailto:${email}`} className="contact-item">{email}</a>
        <a href={github} target="_blank" rel="noreferrer" className="contact-item">GitHub</a>
        <a href={linkedin} target="_blank" rel="noreferrer" className="contact-item">LinkedIn</a>
      </div>
    </section>
  );
}
