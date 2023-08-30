import './App.css';
import Header from './components/Header';
import Form from './components/Form'
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState(() => '')
  const [todoList, SetTodoList] = useState(()=> [])

  return (
    <div className="App"> 
    <Header/>
    <Form 
    todo ={todo}
    setTodo = {setTodo}
    todoList = {todoList}
    SetTodoList = {SetTodoList}
    />

    </div>
  );
}

export default App;
