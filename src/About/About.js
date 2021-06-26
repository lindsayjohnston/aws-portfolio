import React from 'react';
import styles from './About.module.scss';
import lindsayGuitar from '../assets/lindsay_guitar_blue.png';


const About= (props) =>(
    <div className={styles.About} id="About">
    <h1 className={styles.Name1}>About</h1>
        <div className={styles.AboutContent}>
            
            <img src={lindsayGuitar} alt="Lindsay with guitar"></img>
            <p>My work experiences have varied greatly: from the non-profit sector to the service industry, from education to creative director for a rock-and-roll band. The common threads that weave through all of my professional experiences are creativity and innovation. Whether I am creating a teaching strategy, an app or a t-shirt design, I am always looking to improve upon prior work and present the project in an engaging and professional way. I strive to communicate directly and honestly, work efficiently, and push for female representation in historically male-dominated fields.</p>
  
            <h1 className={styles.ResumeLink}><a href={"https://lindsayjohnston.github.io/Portfolio-2020/Lindsay_Johnston_web_developer_resume_June_2021.pdf"} target="_blank" rel="noreferrer">
            Resume</a> </h1>

            
        </div>
        
    </div>
);

export default About;