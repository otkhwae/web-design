import React from 'react'

//const Greet = () => 'hi exa 1' 

///////////////////exa 2
// const Greet = (props) => {
//     return <h1> hello {props.name} youre {props.age} years old</h1>
// }

const Greet = (props) => {
    // put parenthesis as we split jsx into multiple lines
    // jsx should contain only 1 warpper element
    // we can return only 1 html element
    return (
        <div>
            <h1> 
                hello {props.name} youre {props.age} years old
            </h1>
            {props.children}
        </div>
    ) 
}




export default Greet


