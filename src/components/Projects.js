import React, { Component } from "react";
import RepoTable from "./RepoTable.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import "./style/Projects.css";





class Projects extends Component {


    render() {

        let buttons = [ ["", "home", "Home"], ["about", "about", "About"], ["contact", "contact", "Contact"] ];

        return (
            <div className="Projects">
                <title>Projects</title>
                <div id="background"></div>
                <div className="gradient"></div>



                {/* Header */}

                <Header title="Projects" buttons = {buttons} />



                {/* Lotuses and repos */}

                <div id="wrapper">
                    <div id="lotus-tiles"></div>
                    <div id="github-repos-container">
                        <RepoTable key="repo_table"></RepoTable>
                    </div>
                </div>



                {/* Footer */}

                <Footer />

            </div>
        );
    }
}


export default Projects;