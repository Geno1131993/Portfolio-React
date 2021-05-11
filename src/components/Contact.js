import React, { Component } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import "./style/Contact.css";



class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "linkedin"
        }
    }


    make_active = async (props) => {
        let content = document.getElementsByClassName("content");
        console.log(content);
        for(let i = 0; i < content.length; i++){
             if(!content[i].classList.contains("inactive") && content[i].id === `${props}_content`){
                console.log("User clicked active element.");
                return;
            }
            else if(content[i].id !== `${props}_content`){
                await content[i].classList.add("inactive");
                await content[i].classList.remove("active");
            }
        }
        await document.getElementById(`${props}_content`).classList.add("active");
        await document.getElementById(`${props}_content`).classList.remove("inactive");
    }



    render() {


        let buttons = [["", "home", "Home"], ["projects", "projects", "Projects"], ["about", "about", "About"]];

        return (
            <div className="Contact">
                <title> Contact </title>
                <div id="background"></div>
                <div className="gradient"></div>


                <Header title="Contact" buttons={buttons} />

                <div id="contact_container">
                    <p id="like_this"> Like what you see? </p>


                    <div id="tab_wrapper">
                        <p id="contact_me"> Contact me </p>
                        <div id="tab_buttons">
                            <span id="linkedin" onClick={() => this.make_active("linkedin")} className="tab">LinkedIn</span>
                            <span id="email" onClick={() => this.make_active("email")} className="tab">Email</span>
                            <span id="phone" onClick={() => this.make_active("phone")} className="tab">Call me</span>
                            <span id="github" onClick={() => this.make_active("github")} className="tab">Github</span>
                        </div>

                        <div id="content_container">

                            <div id="linkedin_content" className="active content">
                                <div id="linkedin_icon"></div>

                                <div className="content_body">

                                    <p> Reach out to me on LinkedIn! </p>
                                    <a id="linkedin_link" rel="noreferrer" href="https://www.linkedin.com/in/danielle-smith-b48b64195/" target="_blank" alt="LinkedIn"> LinkedIn </a>
                                </div>


                            </div>
                            <div id="email_content" className="content inactive">
                                <div id="email_icon"></div>
                                <div className="content_body">

                                    <p> Send me an email! </p>
                                    <a id="email_link" rel="noreferrer" href="mailto:ukka.ukka.nuka.nuka.appu.wa@gmail.com"> ukka.ukka.nuka.nuka.appu.wa@gmail.com</a>

                                </div>
                            </div>

                            <div id="phone_content" className="content inactive">
                                <div id="phone_icon"></div>
                                <div className="content_body">

                                    <p> Call me! </p>
                                    <p id="phone_number"> (831) 346-8897 </p>
                                </div>
                            </div>

                            <div id="github_content" className="content inactive">
                                <div id="github_icon"></div>
                                <div className="content_body">
                                    <p> Check out my Github repositories! </p>
                                    <p> Also, check out the Projects page!</p>
                                    <a id="github_link" rel="noreferrer" href="https://github.com/Geno1131993" target="_blank">Github</a>
                                </div>
                            </div>
                        </div>





                    </div>


                </div>




                <Footer />
            </div>
        );

    }

}


export default Contact;