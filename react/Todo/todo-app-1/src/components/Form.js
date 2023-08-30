import React from 'react'
import styles from '../style.module.css'

export default function Form({todo, setTodo,todoList,SetTodoList}) {   
  const handleChange = event => {
    setTodo(event.target.value)
    //console.log(todo)
}

const handleSubmit = event =>{
    event.preventDefault ()
    SetTodoList([...todoList,todo])
    //console.log(todoList)
}
  
    return (
    <div className={styles.todoform}>
        <form onSubmit = {handleSubmit} >
            <input 
            value={todo}
            onChange = {handleChange}
            type="text" 
            placeholder= 'Add Todo Item'
            className={styles.todoinput}
            />
            <button
            className= {styles.todobutton}
            type='submit'
            >Add</button>
        </form>
    </div>
  )
}


