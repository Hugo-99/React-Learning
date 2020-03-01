import React, { Component } from 'react';

class UserGreeting extends Component {

    constructor(props){
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        // short circuit operator
        return this.state.isLoggedIn && <div>Welcome Hugo</div>

        // tenary conditional operator
        // return(
        //     this.state.isLoggedIn ?
        //     <div>Welcome Hugo</div> : <div>Welcome Guest</div>
        // )

        // element variable 
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Hugo</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // if-else statement
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             Welcome Koh
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }
    }
}

export default UserGreeting;