import React, { Component } from 'react';

class EventBind extends Component {

    constructor(props){
        super(props)

        this.state = {
            message: 'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this) 
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Bye'
    //     })
    //     console.log(this)
    // }

    // class property as arrow function
    clickHandler = () => {
        this.setState({
            message: 'Byes'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                <button onClick = {this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default EventBind