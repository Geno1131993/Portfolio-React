import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Slides from "./Slides.js";
import Art from "./Art.js";
import "./style/About.css";
import putah_1 from "./images/putah_creek-1.jpg";
import putah_2 from "./images/putah_creek-2.jpg";
import vic_fazio from "./images/vic_fazio.jpg";
import pair from "./images/pair-1.jpg";
import santa_cruz_1 from "./images/santa_cruz-1.jpg";
import santa_cruz_2 from "./images/santa_cruz-2.jpg";
import santa_cruz_3 from "./images/santa_cruz-3.jpg";
import folsom from "./images/folsom.jpg";
import charcoal_1 from "./images/charcoal-1.jpg";
import charcoal_2 from "./images/charcoal-2.jpg";
import charcoal_3 from "./images/charcoal-3.jpg";
import charcoal_4 from "./images/charcoal-4.jpg";
import ink_1 from "./images/ink-1.jpg";
import ink_2 from "./images/ink-2.jpg";
import ink_3 from "./images/ink-3.jpg";
import pastel_1 from "./images/pastel-1.jpg";
import pastel_2 from "./images/pastel-2.jpg";
import pastel_3 from "./images/pastel-3.jpg";
import pastel_4 from "./images/pastel-4.jpg";





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


    let art = [
        charcoal_1,
        charcoal_2,
        charcoal_3,
        charcoal_4,
        ink_1,
        ink_2,
        ink_3,
        pastel_1,
        pastel_2,
        pastel_3,
        pastel_4
    ];



    console.log(art);

    return (
        <div className="About">
            <title>About</title>
            <div id="background"></div>
            <div className="gradient"></div>

            {/* Header */}
            <Header title="About" buttons={buttons} />

            {/* About page content -- currently contains photo slideshow, will add artwork images later */}

            <div id="about_container">
                <Slides images={images} interval={1000} />
                <Art images = {art} interval = {1000}/>
               
            </div>


        




            {/* Footer */}

            <Footer />

        </div>
    );
}


export default About;