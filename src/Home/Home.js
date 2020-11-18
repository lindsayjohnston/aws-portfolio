import React from 'react';
import blueLindsay from '../assets/blue_lindsay.png';
import styles from './Home.module.scss';

const home= (props) =>(
    <div className={styles.Home}>
        <div className={styles.HomeContent}>
            <h1 className={styles.Name1}>Lindsay K. Johnston</h1>
            <img src={blueLindsay} alt="Blue Lindsay"/>
            <h1 className={styles.Title}>Web Developer</h1>
        </div>
        
    </div>
);

export default home;