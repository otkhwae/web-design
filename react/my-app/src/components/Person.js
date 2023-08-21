import React from 'react'



function Person({person}) {
  return (
    <div>
        <h2>
            hi i'm {person.name}, i know {person.skill}
        </h2>
    </div>
  )
}

export default Person

