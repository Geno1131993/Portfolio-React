import "bulma/css/bulma.css";


function Footer(props){
    return(
    <div id="footer" className="level banner">
                <div className="level-left">
                    <div className="level-item">
                        <div id="sig" className="title"> 
                            Design by . . .
                        </div>
                        <a id = "sig_icon" rel = "noreferrer" href = {"https://www.linkedin.com/in/danielle-smith-b48b64195"} target = "_blank" alt = "UKKA"> </a>
                    </div>
                </div>
                <div className="level-right">
                    <div className="level-item"></div>
                </div>
            </div>
    );
}


export default Footer;