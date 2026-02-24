import { useState, useEffect } from 'react';

const NAV_LINKS = ['about', 'skills', 'projects', 'education', 'contact'];

export default function Navbar() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <span className="navbar-logo">YB</span>
      <ul className="navbar-links">
        {NAV_LINKS.map(id => (
          <li key={id}>
            <a href={`#${id}`} className={active === id ? 'active' : ''}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
