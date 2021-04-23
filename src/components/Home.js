//Home page
import { NavLink } from "react-router-dom";
import React, { Component, useState } from "react";
import "./style/Home.css";
import "bulma/css/bulma.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";





const Columns = () => {

}



class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animationCLass: "gradient",
            maxZoom: 1.5
        }
    }



    render() {
        return (



            <div className="Home">


                <title>Welcome!</title>

                <div id = "background"></div>

                <div className="gradient"></div>


                {/* Header */}
                <nav id="header" className="level banner">
                    <div className="level-left">
                        <div className="level-item">
                            <div id="logo" className="title"> Welcome! </div>
                        </div>
                    </div>
                    <div className="level-right">
                        <div className="level-item">

                        </div>
                    </div>
                </nav>





                <div id="column_wrapper">

                    <div id="columns">
                        <div id="about" className="icon_container">
                            <NavLink to = "/about">
                            <div className="icon_title"> About </div>
                            <div id="about_icon" className="icon">
                            </div>
                            </NavLink>
                        </div>



                        <div id="projects" className="icon_container">
                            <NavLink to = "/projects">
                            <div className="icon_title"> Projects </div>
                            <div id="projects_icon" className="icon">
                            </div>
                            </NavLink>
                        </div>



                        <div id="contact" className="icon_container">
                            <NavLink to = "/contact">
                            <div className="icon_title"> Contact </div>
                            <div id="contact_icon" className="icon">
                            </div>
                            </NavLink>
                        </div>

                    </div>

                </div>


                {/* Footer */}

                <div id="footer" className="level banner">
                    <div className="level-left">
                        <div className="level-item">
                            
                            <div id="sig" className="title"> 
                                Design by . . .
                    
                            </div>
                            
                            <a id = "sig_icon" rel = "noreferrer" href = {"https://www.linkedin.com/in/danielle-smith-b48b64195"} target = "_blank"></a>
                            
                        </div>
                    </div>
                    <div className="level-right">
                        <div className="level-item">

                        </div>

                    </div>


                </div>

        </div>




        );
    }

}

export default Home;