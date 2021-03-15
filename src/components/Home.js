//Home page
import { NavLink } from "react-router-dom";
import React, { Component, useState } from "react";
import "./style/Home.css";
import "bulma/css/bulma.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";





const Columns = () => {
    
}



const Home = () => {

    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="Home">
            <title>Welcome!</title>


            {/* 
    Having trouble with splash fading out, will solve later
        <div>
            <CSSTransition className ="splash" in={isVisible} timeout={2000}>
                <div>I welcome you.</div>
            </CSSTransition>

            <div id = "invisible" className = "splash" onClick={() => setIsVisible(!isVisible)}>
                    
            </div>
        </div> */}

            {/* Header */}
            <nav id="header" className="level">
                <div className="level-left">
                    <div className="level-item">
                        <div id="logo"> Welcome! </div>
                    </div>
                </div>
                <div className="level-right">
                    <div className="level-item">

                        {/* <NavLink to="/about">
                            <button id="about" type="button"> About </button>
                        </NavLink>

                        <NavLink to="/projects">
                            <button id="projects" type="button"> Projects </button>
                        </NavLink>


                        <NavLink to="/contact">
                            <button id="contact" type="button"> Contact </button>
                        </NavLink> */}

                    </div>
                </div>
            </nav >


            <div id = "wrapper">

            <div id="columns">
                <div id="about">
                    <div className="icon_title"> About </div>
                    <div id="about_icon" className="icon">

                    </div>
                </div>



                <div id="projects">
                    <div className="icon_title"> Projects </div>
                    <div id="project_icon" className="icon">

                    </div>
                </div>


                <div id="contact">
                    <div className="icon_title"> Contact </div>
                    <div id="contact_icon" className="icon">

                    </div>
                </div>


            </div>

            </div>



        </div >
    );

}

export default Home;