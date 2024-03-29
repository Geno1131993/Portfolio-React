//Home page
import React, { Component } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Icon from "./Icon.js";
import "./style/Home.css";
import "bulma/css/bulma.css";




class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
         
            maxZoom: 1.5
        }
    }



    render() {
        return (

            <div className="Home">


                <title>Welcome!</title>


                {/* Two-layer background -- background image goes on top, animated gradient goes below */}

                <div id="background"></div>

                <div className="gradient"></div>


                {/* Header */}
                <Header title="Welcome!"/>




                {/* Icons */}

                <div id="column_wrapper">


                        <Icon name="about" title="About"></Icon>
                        <Icon name="projects" title="Projects"></Icon>
                        <Icon name="contact" title="Contact"></Icon>



                </div>


                {/* Footer */}

                <Footer/>

            </div>
        );
    }

}

export default Home;