import styles from './HeroStyles.module.css';
// import heroImg from '../../assets/Design uten navn.png';
// import hero_img from '../../assets/hero-img-removebg-preview1.png';
import downarrowanimation from '../../assets/Animation - 1719836184351.json';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';
import leetCode from '../../assets/leetcode.png';
import Lottie from 'react-lottie-player';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        {/* <img
          src={hero_img}
          className={`${styles.hero} ${styles.avatar}`}
          alt="Profile picture - Ravi Kumar"
        /> */}

        <Lottie
          loop
          animationData={downarrowanimation}
          play
          className={styles.lottiePlayer}
        />

        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Ravi Kumar
          {/* <br /> */}
        </h1>
        <h2>Full Stack Web Developer</h2>
        <span>
          <a href="https://x.com/770rkravi" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/kravi770" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/ravi-kumar-a0027325b/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href='https://leetcode.com/u/myself_ravi_kumar/' target='_blank'>
            <img src={leetCode} alt='Leetcode icon' />
          </a>
        </span>
        <p className={styles.description}>
          Passionate about developing robust web applications from frontend to backend.
        </p>
        <a href='https://drive.google.com/file/d/1PfhpEsHLlEgfuV1OMmnHckEQb4hi8Rq7/view?usp=drive_link' target="_blank">
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
