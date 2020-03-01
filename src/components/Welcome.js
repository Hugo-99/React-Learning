import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const {name, midde} = this.props
        // const {state1, state2} = this.state
        return (
        <h1>
            Welcome {name} aka {midde}
        </h1>
        )
    }
}

export default Welcome