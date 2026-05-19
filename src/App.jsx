import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";
import "./App.css";

export default function App() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const background = backgroundRef.current;

    if (!background) {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      background.style.setProperty("--cursor-glow-opacity", "0");
      return undefined;
    }

    let frameId = 0;
    let isPointerActive = false;
    let currentX = window.innerWidth * 0.55;
    let currentY = window.innerHeight * 0.28;
    let targetX = currentX;
    let targetY = currentY;

    const animate = () => {
      currentX += (targetX - currentX) * 0.085;
      currentY += (targetY - currentY) * 0.085;

      background.style.setProperty("--cursor-x", `${currentX}px`);
      background.style.setProperty("--cursor-y", `${currentY}px`);
      background.style.setProperty(
        "--cursor-glow-opacity",
        isPointerActive ? "0.9" : "0.45"
      );

      frameId = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      isPointerActive = true;
    };

    const handlePointerLeave = () => {
      isPointerActive = false;
      targetX = window.innerWidth * 0.55;
      targetY = window.innerHeight * 0.28;
    };

    background.style.setProperty("--cursor-x", `${currentX}px`);
    background.style.setProperty("--cursor-y", `${currentY}px`);
    background.style.setProperty("--cursor-glow-opacity", "0.45");

    frameId = window.requestAnimationFrame(animate);

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <>
      <div className="bg-image" aria-hidden="true" ref={backgroundRef}>
        <span className="bg-blob bg-blob-1" />
        <span className="bg-blob bg-blob-2" />
        <span className="bg-blob bg-blob-3" />
        <span className="bg-blob bg-blob-4" />
        <span className="bg-cursor-glow" />
      </div>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <p>Built by Yitzhak Binyamin</p>
      </footer>
    </>
  );
}
