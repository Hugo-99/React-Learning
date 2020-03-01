import React from 'react'

// function Greet() {
//     return <h1>Hello Hugo</h1>
// }

export const Greet = props => {
    const {name, midde, children} = props
    return (
        <div>
            <h1>Hello {name} a.k.a {midde} </h1>
            {children}
        </div>
    )
}

export default Greet;