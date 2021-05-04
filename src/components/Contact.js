import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";



function Contact(){

    let buttons = [ ["", "home", "Home"], ["projects", "projects", "Projects"], ["about", "about", "About"] ];
    return(
        <div className = "Contact">
            <title> Contact </title>
            <div id="background"></div>
                <div className="gradient"></div>


            <Header title = "Contact" buttons = {buttons}/>



            <Footer/>
        </div>
    );

}


export default Contact;