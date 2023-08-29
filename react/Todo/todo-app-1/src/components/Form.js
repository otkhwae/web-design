import React from 'react'
import styles from '../style.module.css'

export default function Form() {   
  return (
    <div className={styles.todoform}>
        <form >
            <input 
            type="text" 
            placeholder= 'Add Todo Item'
            className={styles.todoinput}
            />
            <button
            className= {styles.todobutton}
            >Add</button>
        </form>
    </div>
  )
}


