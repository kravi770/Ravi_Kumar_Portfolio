import React from 'react';
import './ProjectCard.css'; // Assuming you have a separate CSS file for styling

function ProjectCard({ src, link, h3, p, techStack }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card">
      <div className="project-card-container">
        <img className="project-image" src={src} alt={`${h3} logo`} />
        <h3 className="project-title">{h3}</h3>
        <p className="project-description">{p}</p>
        <br />
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech">{tech}</span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
