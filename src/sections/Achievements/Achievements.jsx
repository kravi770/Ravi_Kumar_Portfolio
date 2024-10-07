import styles from './Achievements.module.css';

function Achievements() {
    return (
        <section id="achievements" className={styles.container}>
            <h1 className="sectionTitle">Achievements</h1>
            <div className={styles.achievementList}>
                <div className={styles.achievement}>
                    <h3>Codechef</h3>
                    <p>Achieved Highest Rating of <b>1675</b> #3⭐ in
                        <a href="https://www.codechef.com/users/myself_ravi_ku" target="_blank" rel="noreferrer" style={
                            {
                                color: 'blue',
                                textDecoration: 'none',
                                marginLeft: '0.5rem'
                            }
                        }>
                            Codechef</a>
                        .</p>
                </div>
                <div className={styles.achievement}>
                    <h3>Codeforces</h3>
                    <p>Achieved Highest Rating of <b>1242</b> <p style={{
                        color: 'darkgreen',
                        fontWeight: 'bold'
                    }}>pupil</p>  in
                        <a href="https://codeforces.com/profile/myself_ravi_kumar" target="_blank" rel="noreferrer" style={
                            {
                                color: 'blue',
                                textDecoration: 'none',
                                marginLeft: '0.5rem'
                            }
                        }>
                            Codeforces</a>
                        .</p>
                </div>
                <div className={styles.achievement}>
                    <h3>JEE Advanced</h3>
                    <p>Achieved General Rank of <b>4217</b> in JEE Advanced 2021, placing in the top <b>0.4%</b> out of 1 million applicants.</p>
                </div>
            </div>
        </section>
    );
}

export default Achievements;