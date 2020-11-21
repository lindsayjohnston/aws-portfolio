import React from 'react';
import styles from './Contact.module.scss';


const Contact = (props) => (
    <div className={styles.Contact} id="Contact">
        <h1 className={styles.ConnectHeading}>Let's Connect!</h1>
        <div className={styles.Links}>
            <h1 className={styles.ConnectLink}>
                <a href="https://github.com/lindsayjohnston" target="blank">GitHub</a>

            </h1>

            <h1 className={styles.ConnectLink}>
                <a target="blank" href="https://www.linkedin.com/in/lindsay-johnston-hello123/">LinkedIn</a>
            </h1>

            <h1 className={styles.ConnectLink}>
                <a href="mailto:lindsaykjohnston@outlook.com">E-mail</a>

            </h1>

        </div>
    </div>
);

export default Contact;