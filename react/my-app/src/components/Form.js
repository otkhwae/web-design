import React, { useState } from 'react'

function Form() {
    const [title,setTitle] = useState('')
    const [submitbutton, submitNow] = useState()
    const handleChange = (event) => setTitle(event.target.value)
    const handleSubmit = (event) => submitNow(event.preventDefault())

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label> enter name</label> <br />
          <input 
              type="text" 
              value= {title}
              //onChange={(prevValue) => setTitle(prevValue.target.value)}
              onChange = {handleChange}
          />
          <button type='submit'> Submit</button>

      </form>

    </div>
  )
}

export default Form


