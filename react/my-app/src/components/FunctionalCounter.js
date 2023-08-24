import React, {useState} from 'react'

function FunctionalCounter() {
    // 4 is default state therefore counter starts at 4
    // use state returns an array with 2 values
    // first value is your state eg count which is gonna be current state at every iteration of render function
    // 2nd value returned is a function that updates current state
    //[current state, function to update current state] = usestate()
    // this value of 4 runs everytime we call our function
    //const [count, setCount] = useState(4)
    //runs everytime
    //const [count, setCount] = useState(somefn())
    // you can pass in objects
    //const [count, setCount] = useState({count:4, theme:'blue'} )
    // const [state, setState] = useState({count:4, theme:'blue'} )
    // const count = state.count
    // const theme = state.theme


    // this runs once when a componenet renders
    const [count, setCount] = useState( () => 4 )

    function decrementCount (){
        // incorrect way
        //setCount (count -1)
        //correct
        setCount(prevCount => prevCount-1)

        // we retuen an obj
        //setState(prevState=> {count: return {prevState.count+1}})
        //setState(prevState=> {...prevState, count: return {prevState.count+1}})
    }

    const incrementCount = () => setCount(prevCount => prevCount+1)

    return (
    <div>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        {/* <span>{theme}</span> */}
        <button onClick={incrementCount}>+</button>

    </div>
  )
}


export default FunctionalCounter
