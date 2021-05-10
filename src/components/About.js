import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Slides from "./Slides.js";
import "./style/About.css";
import putah_1 from "./images/putah_creek-1.jpg";
import putah_2 from "./images/putah_creek-2.jpg";
import vic_fazio from "./images/vic_fazio.jpg";
import pair from "./images/pair-1.jpg";
import santa_cruz_1 from "./images/santa_cruz-1.jpg";
import santa_cruz_2 from "./images/santa_cruz-2.jpg";
import santa_cruz_3 from "./images/santa_cruz-3.jpg";
import folsom from "./images/folsom.jpg";






function About() {
    let buttons = [["", "home", "Home"], ["projects", "projects", "Projects"], ["contact", "contact", "Contact"]];

    let images = [
       putah_1,
       putah_2,
       vic_fazio,
       pair,
       santa_cruz_1,
       santa_cruz_2,
       santa_cruz_3,
       folsom
    ];



    return (
        <div className="About">
            <title>About</title>
            <div id="background"></div>
            <div className="gradient"></div>
            <Header title="About" buttons={buttons} />
            <div id="about_container">
                <Slides images={images} interval={1000} />


            </div>

            <Footer />

        </div>
    );
}


export default About;