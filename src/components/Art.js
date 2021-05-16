import React, { Component } from "react";



class Art extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_slide: 0,
            interval: 0,
            images: []
        }
    }



    componentDidMount() {
        this.setState({
            current_slide: 0,
            interval: this.props.interval,
            images: this.props.images
        });
    }



    next = async () => {
        if (this.state.current_slide === this.state.images.length - 1) {
            await this.setState(current_state => {
                return {
                    current_slide: 0
                }
            });
        }
        else{
            await this.setState(current_state => {
                return{
                    current_slide: current_state.current_slide + 1
                }
            });
        }
    }


    previous = async () =>{
        if(this.state.current_slide === 0){
            await this.setState(current_state => {
                return{
                    current_slide: current_state.images.length - 1
                }
            });
        }
        else{
            await this.setState(current_state =>{
                return{
                    current_slide: current_state.current_slide - 1
                }
            });
        }
    }



    render() {

        return (

            <div className="art">
                <p className= "headline">Art Reel</p>


                <div id="controller">
                    <span className="controller_button" onClick={this.previous} > Previous </span>

                    <span className="controller_button" onClick={() => this.next()} > Next </span>
                </div>


                <div id="art_container">

                    <div id="current" className="art_image" style={{ backgroundImage: `url(${this.state.images[this.state.current_slide]})` }}>

                    </div>

                </div>
            </div>
        );
    }
}




export default Art;