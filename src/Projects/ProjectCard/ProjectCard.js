import React from 'react';
import styles from './ProjectCard.module.scss';


let hiddenDivClass;
let hiddenHeadingClass;

const projectCard = (props) => {
    if(props.shown === "none"){
        hiddenHeadingClass=styles.Shown;
        hiddenDivClass=styles.Hidden;
    } else{

    
        if (props.shown === props.index) {
            hiddenDivClass = styles.Shown;
            hiddenHeadingClass=styles.Shown;
        } else {
            hiddenDivClass = styles.Hidden;
            hiddenHeadingClass=styles.Hidden;
        }
    }
    

    return (


        <div className={styles.ProjectCard}>
            <h2 className={hiddenHeadingClass} onClick={props.click}>{props.title}</h2>
            <div className={hiddenDivClass}>
                <a href={props.link} target="blank"><img src={props.image}></img></a>
                <p> {props.caption}</p>
            </div>

        </div>

    )
};

export default projectCard;