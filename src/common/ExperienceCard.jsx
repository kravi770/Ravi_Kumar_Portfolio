import React from 'react';
import '../common/ExperienceCard.css' // Assuming you have a separate CSS file for styling

function ExperienceCard({ link, img, title, company, duration, description }) {
    return (
        // <div className="experience-card-container">
        //     <img src={img} alt="experience" className="experience-image" />
        //     <h2 className="experience-title">{title}</h2>
        //     <h3 className="experience-company">{company}</h3>
        //     <p className="experience-duration">{duration}</p>
        //     <p className="experience-description">{description}</p>
        // </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="experience-card">
            <div className="experience-card-container">
                <img src={img} alt="experience" className="experience-image" />
                <h2 className="experience-title">{title}</h2>
                <h3 className="experience-company">{company}</h3>
                <p className="experience-duration">{duration}</p>
                <p className="experience-description">{description}</p>
            </div>
        </a>
    );
}

// function ProjectCard({ src, link, h3, p, techStack }) {
//     return (
//       <a href={link} target="_blank" rel="noopener noreferrer" className="project-card">
//         <div className="project-card-container">
//           <img className="project-image" src={src} alt={`${h3} logo`} />
//           <h3 className="project-title">{h3}</h3>
//           <p className="project-description">{p}</p>
//           <br />
//           <div className="tech-stack">
//             {techStack.map((tech, index) => (
//               <span key={index} className="tech">{tech}</span>
//             ))}
//           </div>
//         </div>
//       </a>
//     );
//   }

// function ExperienceCard({ title, company, duration, description }) {
//     return (
//         <div className="experience">
//             <h2 className="experience-title">{title}</h2>
//             <h3 className="experience-company">{company}</h3>
//             <p className="experience-duration">{duration}</p>
//             <p className="experience-description">{description}</p>
//         </div>
//     );
// }

export default ExperienceCard;
