import React from 'react'

// function Greet() {
//     return <h1>Hello Hugo</h1>
// }

export const Greet = (props) => {
    console.log(props)
return (
    <div>
        <h1>Hello {props.name} a.k.a {props.midde} </h1>
        {props.children}
    </div>
    )
}
// export default Greet;