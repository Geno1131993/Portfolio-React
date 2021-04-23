import React, {Component} from "react";
import "bulma/css/bulma.css";




class Repo extends Component{
    constructor(props){
        super(props);
        this.state = {
            repo: props
        }
    }



    render() {
        console.log(this.state.repo);
        return (
            <div>
                {this.state.repo.name}
            </div>
        );
    }
}

export default Repo;