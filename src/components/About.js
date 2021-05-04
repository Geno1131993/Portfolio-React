import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";




function About(){
    let buttons = [ ["", "home", "Home"], ["projects", "projects", "Projects"], ["contact", "contact", "Contact"] ];

    return(
        <div className = "About">
            <title>About</title>
            <div id="background"></div>
                <div className="gradient"></div>
            <Header title = "About" buttons = {buttons}/>


            <Footer/>

        </div>
    );
}


export default About;