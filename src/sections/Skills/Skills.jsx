import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="C/C++" />
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="SQL" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="NodeJS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="ReactJS" />
        <SkillList src={checkMarkIcon} skill="Java SpringBoot" />
      </div>

      <h1 style={
        {
          fontSize: '1.5rem',
          marginTop: '5rem',
          marginBottom: '1rem'
        }

      }>CourseWork</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Data Structures and Algorithms" />
        <SkillList src={checkMarkIcon} skill="Operating Systems" />
        <SkillList src={checkMarkIcon} skill="Object Oriented Programming" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Database Management Systems" />
        <SkillList src={checkMarkIcon} skill="Computer Networks" />
        <SkillList src={checkMarkIcon} skill="Compiler Design" />
      </div>

    </section>
  );
}

export default Skills;
