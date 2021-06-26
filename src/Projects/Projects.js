import React, { Component } from 'react';
import styles from "./Projects.module.scss";
import chipotleImage from "../assets/Chipotle_screenshot.png";
import gitHubMapImage from '../assets/github_map_screenshot.png';
import starPointsImage from '../assets/starPoints_screenshot.png';
import ProjectCard from './ProjectCard/ProjectCard';

const projectInfo = [
    
    ["4 APIs-1 Button", gitHubMapImage, "By querying four different APIs--from Google, GitHub and Geomaps--I used vanilla JavaScript to display an interactive map of cities with their corresponding numbers of GitHub users. This project features asynchronous functions, Node.js and Heroku’s config variables feature to protect my API keys.", "https://github-map-real.herokuapp.com/"],
    ["Points Calculator", starPointsImage, "I used React to create a customer loyalty points calculator that displays beautifully on desktop and mobile. The user can upload their own dataset of purchases and calculate the amount of points accrued (think administrative applications). I also included a dummy data set to simulate immutable data stored on a server (think customer-facing applications).", "https://master.d2sxml8azj8dyl.amplifyapp.com/"],
    ["Order Online", chipotleImage, "Mimicking the style and functionality of the Chipotle website, I used React to create dynamically-populated content cards to showcase each item on the menu. Users can choose ingredients for each item, add or remove items from their cart, and place an order online.", "https://www.bocaloud.com/"]
];

let projectCardsClass= styles.ProjectCards;

class Projects extends Component {
    state = {
        shown: "none"
    }

    clickHandler = (index) => {
        if(this.state.shown === index){
            this.setState({shown: "none"});
        } else{
            this.setState({shown: index})
        }
        
    }
    

    render() {
        
        if(this.state.shown !== "none"){
            //move cards up
            projectCardsClass=styles.ProjectCardsToTop;
        } else{
            projectCardsClass=styles.ProjectCards;
        }


        return (
            <div id="Projects" className={styles.Projects}>
                 <h1 className={styles.ProjectsTitle}>PROJECTS</h1>
                <div className={projectCardsClass}>
                    
                    {projectInfo.map((item, i) => {

                        return (<ProjectCard
                            key={item[0]}
                            title={item[0]}
                            image={item[1]}
                            caption={item[2]}
                            link={item[3]}
                            shown={this.state.shown}
                            index= {i}
                            click= {()=>this.clickHandler(i)}
                        />)
                    })}

                </div>

            </div>
        )

    }


};

export default Projects;