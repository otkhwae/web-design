import React from 'react'

// const ChildComponent = props => {
//     const {greetHandler} = props
//     return (
//       <div>
//           <button onClick= {greetHandler}>Greet Parent</button>
//       </div>
//     )
// }

// function ChildComponent({greetHandler}) {
//     return (
//       <div>
//           <button onClick= {greetHandler}>Greet Parent</button>
//       </div>
//     )
//   }


// function ChildComponent(props) {
//   return (
//     <div>
//         <button onClick= {props.greetHandler}>Greet Parent</button>
//     </div>
//   )
// }

// use to pass parameters to parent component

function ChildComponent(props) {
    return (
      <div>
          <button onClick= {() => props.greetHandler('child')}>Greet Parent</button>
      </div>
    )
  }


export default ChildComponent