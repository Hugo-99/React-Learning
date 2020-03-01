import React, { Component } from 'react'

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }

    changeMessage() {
        this.setState({
            message: 'OofoO'
        })
    }

    render() {
    return  ( 
        <div>
            <h1>
            {this.state.message}
            </h1>
            <button onClick={()=> this.changeMessage()}>PressME</button>
        </div>
        )
    }
}

export default Message