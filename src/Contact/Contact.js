import React from 'react';
import styles from './Contact.module.scss';


const Contact = (props) => (
    <div className={styles.Contact} id="Contact">
        <h1>Let's Connect!</h1>
        <div className={styles.Links}>
            <a href="https://github.com/lindsayjohnston" target="blank">GitHub</a>
            <a target="blank" href="https://www.linkedin.com/in/lindsay-johnston-hello123/">LinkedIn</a>
            <a href="mailto:lindsaykjohnston@outlook.com">E-mail</a>
        </div>
    </div>
);

export default Contact;