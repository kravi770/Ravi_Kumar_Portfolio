import React from 'react';
import styles from './ExperienceStyles.module.css';
import ExperienceCard from '../../common/ExperienceCard';
import beetel from '../../assets/Bettel.png';
import Vdev from '../../assets/Vdev.png';
import terabh from '../../assets/terabh.png';

function Experience() {
    return (
        <section id="experience" className={styles.container}>
            <h1 className="sectionTitle">Work Experience</h1>
            <div className={styles.experienceContainer}>

                <ExperienceCard
                    link={'https://www.linkedin.com/company/terabh-intelligence/'}
                    img={terabh}
                    title="Full Stack Web Developer Intern"
                    company="Terabh Intelligence"
                    duration="May 2024- July 2024"
                    description="Worked as a full stack developer intern on a project for our company. Developed and maintained the frontend and backend of the Ads-Platform, the revenue model of the company."
                />
                <ExperienceCard
                    link={'https://www.linkedin.com/company/vdevinc/'}
                    img={Vdev}
                    title="Backend Developer Freelancer"
                    company="vDev,Inc"
                    duration="March 2024 - April 2024"
                    description="Currently working as a backend developer freelancer on a project Orma AI, an advanced events management platform. Developed and maintained the backend of the application."
                />
                <ExperienceCard
                    link={'https://www.linkedin.com/company/bettel/'}
                    img={beetel}
                    title="Technical Internship"
                    company="Beetel"
                    duration="Jan 2024 - March 2024"
                    description="Worked as a full stack developer intern on a project for our company. Developed and maintained the frontend and backend of the application sections like user authentication, google authentication and blogs page for the website."
                />
            </div>
        </section>
    );
}

export default Experience;