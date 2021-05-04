import "bulma/css/bulma.css";
import Link from "./Link.js";


//Supports up to three button links
function Header(props) {

    let buttons = [];
    if (props.buttons) {
        buttons = props.buttons.map((button) => {
            return <Link key = {button[1]} path={button[0]} name={button[1]} title={button[2]}></Link>
        });
    }

    return (
        <nav id="header" className="level banner">
            <div className="level-left">
                <div className="level-item">
                    <div id="logo" className="title"> {props.title} </div>
                </div>
            </div>
            <div className="level-right">
                <div className="level-item">
                    <ul id = "button_container">
                        {buttons}
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default Header;