import React from 'react';
import styles from './About.module.scss';
import lindsayGuitar from '../assets/lindsay_guitar_blue.png';
import lindsayResume from '../assets/Lindsay_Johnston_WD_resume_2020.pdf'

const About= (props) =>(
    <div className={styles.About} id="About">
        <div className={styles.AboutContent}>
            <h1 className={styles.Name1}>About</h1>
            <img src={lindsayGuitar} alt="Lindsay with guitar"></img>
            <p>My work experiences have varied greatly: from the non-profit sector to the service industry, from education to my most current role as creative director for a rock-and-roll band. The common threads that weave through all of my professional experiences are creativity and innovation. Whether I am creating a teaching strategy, an app or a t-shirt design, I am always looking to improve upon prior work and present the project in an engaging and professional way. I strive to communicate directly and honestly, work efficiently, and push for female representation in historically male-dominated fields.</p>
  
            <a href={lindsayResume} target="_blank">Resume</a>

            
        </div>
        
    </div>
);

export default About;