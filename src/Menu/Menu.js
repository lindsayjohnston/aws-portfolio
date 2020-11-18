import React from 'react';
import styles from './Menu.module.scss';

const menu = (props) => (
    <div className={styles.Menu}>
        <div className={styles.MenuItems}>
            <a href="#Top" className={styles.Top}>TOP</a>
            <a href="#About" className={styles.About}>ABOUT</a>
            <a href="#Projects"className={styles.Projects}>PROJECTS</a>
            <a href="#Contact"className={styles.Contact}>CONTACT</a>
        </div>

    </div>
);

export default menu;