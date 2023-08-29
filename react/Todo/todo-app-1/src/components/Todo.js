import React, {useState} from 'react';

const Todo = () => {
    // usestate returns an array with 2 values
    //therefore destructure in line
    // 1st value is current state at every iteration of our render fn
    // 2nd value is a fn that allow us to update state
    // fn input of usestate runs every time component renders
    //========================================
    //const [todo, setTodo] = useState('')

    // fn input of usestate runs only once when component renders
    const [todo, setTodo] = useState(() => '')

    // event is value entered on input field
    // set the value of todo to event
    const handleChange = (event) => setTodo(event.target.value)

    // we need to make add button functional
    // when clicking add, the input/value must be saved as state
    // add each todo to todolist
    //
    
    const [todoList,setTodoList] = useState(() => [])
    const handleSubmit = (event) => {
        //whenever clicking add the webpage refreshes and we prevent that
        event.preventDefault()
        let tempList = todoList
        tempList.push(todo)
        setTodoList(tempList)
        console.log(todoList)

    }


    return (
        <div>
            {/* whenever clicking add button the form will be submitted */}
            <form onSubmit= {handleSubmit}>
            {/* bind value entered by user to state todo */}
            {/* onchange is a fn thatll be triggered when theres a change/input to input field */}
                <input value={todo} onChange= {handleChange} type="text" />
                <button type='submit'> Add</button>
            </form>
        </div>
    )
}
export default Todo