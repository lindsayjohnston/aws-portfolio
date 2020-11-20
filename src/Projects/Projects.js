import React, { Component } from 'react';
import styles from "./Projects.module.scss";
import chipotleImage from "../assets/Chipotle_screenshot.png";
import gitHubMapImage from '../assets/github_map_screenshot.png';
import vannaImage from '../assets/vanna_screenshot.png';
import ProjectCard from './ProjectCard/ProjectCard';

const projectInfo = [
    ["Order Online", chipotleImage, "Mimicking the style and functionality of the Chipotle website, I used React to create dynamically-populated content cards to showcase each item on the menu. Users can choose ingredients for each item, add or remove items from their cart, and place an order online.", "https://www.bocaloud.com/"],
    ["4 APIs-1 Button", gitHubMapImage, "By querying four different APIs--from Google, GitHub and Geomaps--I used vanilla JavaScript to display an interactive map of cities with their corresponding numbers of GitHub users. This project features asynchronous functions, Node.js and Heroku’s config variables feature to protect my API keys.", "https://github-map-real.herokuapp.com/"],
    ["Content and Design", vannaImage, "The webpage you're looking at was built with React and SASS. In addition to developing websites, I have a knack for writing excellent copy and an eye for design. For another example from my web design portfolio, follow the link above to a site I made with Wix.", "https://www.vannaoh.com/"]
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
                 <h1>PROJECTS</h1>
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