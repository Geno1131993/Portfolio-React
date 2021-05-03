import { NavLink } from "react-router-dom";




function Icon(props) {
    return (
        <div id = {props.name} className="icon_container">
            <NavLink to = {`/${props.name}`}>
                <div className= "icon_title"> {props.title} </div>
                <div id =  {`${props.name}_icon`} className="icon"></div>
            </NavLink>
        </div>
    );
}



export default Icon;