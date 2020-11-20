import React, { Component } from 'react';
import styles from './Menu.module.scss';

class Menu extends Component {
    //RUN SOME CODE HERE TO UNDERLINE OR BOLD WHICH PAGE WE'RE ON
    menuLabels = [
        "Top", "About", "Projects", "Contact"
    ]

    state = {
        pageShown: "Top"
    }


    menuClickHandler = (label) => {
        this.setState({ pageShown: label })
    }

    render() {

        return (

            <div className={styles.Menu} id="menu">
                <div className={styles.MenuItems}>

                    {this.menuLabels.map(item => {
                        const itemUpperCase = item.toUpperCase();
                        let labelStyle = `${styles.NotCurrentPage} ${styles[item]}`;
                        if (item === this.state.pageShown) {
                            labelStyle = `${styles.CurrentPage} ${styles[item]}`;
                        }
                        return (
                            
                                <a href={`#${item}`}
                                    key={item}
                                    className={labelStyle}
                                    onClick={() => this.menuClickHandler(item)}
                                    
                                >
                                    {itemUpperCase}</a>
                           
                        )
                    })}

                </div>

            </div>);
    }
};

export default Menu;