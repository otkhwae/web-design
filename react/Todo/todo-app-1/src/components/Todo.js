import React from 'react'
import styles from '../style.module.css'

const Todo = ({todoItem, todoList, SetTodoList}) => {
  const deleteTodo = () => SetTodoList(todoList.filter(item => item.id !== todoItem.id))
    

  return (
    <div>
        <div className = {styles.todoitem}>
            <h3 className = {styles.todoname}>{todoItem.name}</h3>
            <button 
            className = {styles.deletebutton}
            onClick = {deleteTodo}
            >
                Done</button>
        </div>

    </div>
  )
}

export default Todo