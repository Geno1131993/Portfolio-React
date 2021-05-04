
import { NavLink } from "react-router-dom";


function Link(props) {
    return (
        <NavLink to={`/${props.path}`}>
            <div id={`${props.name}`} className="button">
                {props.title}
            </div>
        </NavLink>
    );
}


export default Link;