import { useState, useEffect } from 'react';
import { data } from "../data";

export default function Hero() {
  const [displayed, setDisplayed] = useState('');
  const fullText = data.tagline;

  useEffect(() => {
    let timer;
    const delay = setTimeout(() => {
      let i = 0;
      timer = setInterval(() => {
        setDisplayed(fullText.slice(0, i + 1));
        i++;
        if (i === fullText.length) clearInterval(timer);
      }, 60);
    }, 800);
    return () => {
      clearTimeout(delay);
      clearInterval(timer);
    };
  }, [fullText]);

  return (
    <section className="hero">
      <div className="available-badge">
        <span className="available-dot" />
        Available for work
      </div>
      <p className="hero-greeting">Hi, I'm</p>
      <h1 className="hero-name">{data.name}</h1>
      <h2 className="hero-title">{data.title}</h2>
      <p className="hero-tagline">
        {displayed}
        <span className="cursor">|</span>
      </p>
      <div className="hero-btns">
        <a href="#projects" className="btn btn-primary">View My Work</a>
        <a href="#contact" className="btn btn-outline">Contact Me</a>
        <a href="/Yitzhak_Binyamin_CV.docx" download className="btn btn-outline">Download CV</a>
      </div>
    </section>
  );
}
