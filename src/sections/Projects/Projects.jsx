import styles from './ProjectsStyles.module.css';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import openSkill from '../../assets/openskill.png';
import advista from '../../assets/advista.png';
import personalChatBot from '../../assets/personal_chatbot.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={openSkill}
          link="https://github.com/kravi770/Job-Posting-Web-App"
          // h3="OpenSkill"
          p="OpenSkill is a job posting and application web application designed to connect employers with potential employees efficiently and effectively."
          techStack={['ReactJS', 'Chakra UI', 'Java Spring Boot', 'Oracle SQL']}
        />
        <ProjectCard
          src={advista}
          link="https://github.com/kravi770/AdVista_Ad_Platform"
          // h3="AdVista"
          p="AdVista is a comprehensive advertisement management platform designed to connect businesses with their audience effectively. It features a user-friendly interface for ad creation and management."
          techStack={['ReactJS', 'Chakra UI', 'NodeJS', 'ExpressJS', 'MongoDB']}
        />
        <ProjectCard
          src={personalChatBot}
          link="https://github.com/kravi770/Personal_ChatBot"
          // h3="Hipsster"
          p="A MERN stack web application for user management and ChatGPT interaction, featuring admin-controlled CRUD operations and user profile management. It also features a chatbot that can interact with users."
          techStack={['ReactJS', 'Material UI', 'NodeJS', 'ExpressJS', 'MongoDB']}
        />
      </div>
    </section>
  );
}

export default Projects;
