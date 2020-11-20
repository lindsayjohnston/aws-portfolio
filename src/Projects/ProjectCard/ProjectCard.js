import React from 'react';
import styles from './ProjectCard.module.scss';
import xOutButton from "/Users/lindsayjohnston/Desktop/Programming/aws-portfolio/src/assets/times-solid.svg";
import pointer from "/Users/lindsayjohnston/Desktop/Programming/aws-portfolio/src/assets/mouse-pointer-solid.svg";


let hiddenDivClass;
let hiddenHeadingClass;
let projectCardStyle;
let xOutButtonStyle;

const projectCard = (props) => {
    if (props.shown === "none") {
        hiddenHeadingClass = `${styles.Shown} ${styles.ProjectHeading}`;
        hiddenDivClass = styles.Hidden;
        projectCardStyle = styles.ProjectCard;
        xOutButtonStyle = styles.Hidden;
    } else {


        if (props.shown === props.index) {
            hiddenDivClass = styles.Shown;
            hiddenHeadingClass = `${styles.Shown}  ${styles.ProjectHeading}`;
            projectCardStyle = `${styles.ProjectCard} ${styles.Border}`;
            xOutButtonStyle = styles.XOutButton;
        } else {
            hiddenDivClass = styles.Hidden;
            hiddenHeadingClass = `${styles.Hidden}  ${styles.ProjectHeading}`;
            projectCardStyle = `${styles.ProjectCard}`;
            xOutButtonStyle = styles.Hidden;
        }
    }


    return (


        <div className={projectCardStyle}>
            <h1 className={hiddenHeadingClass} onClick={props.click}>{props.title}</h1>
            <div className={hiddenDivClass}>
                <div className={styles.ImgOverlay}>
                    <a href={props.link} target="blank"><img src={props.image} className={styles.Thumbnail}></img></a>

                    <img className={styles.Pointer} src={pointer}></img>
                </div>

                <p> {props.caption}</p>
                
            </div>

            <img className={xOutButtonStyle} src={xOutButton} onClick={props.click}></img>

        </div>

    )
};

export default projectCard;