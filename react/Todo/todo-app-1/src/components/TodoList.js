import React from 'react'
import Todo from './Todo'

const TodoList = ({todoList, SetTodoList}) => {
  return (
    <div>
        {todoList.map((todoItem) => (<Todo 
        key = {todoItem.id} 
        todoItem={todoItem}
        todoList = {todoList}
        SetTodoList = {SetTodoList}
        />))}

    </div>
  )
}

export default TodoList