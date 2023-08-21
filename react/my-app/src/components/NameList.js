import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['ot','shi','rati']
    const namelist = names.map(name => <h2> {name} </h2> )

    const persons = [
        {
            id: 1,
            name: 'ot',
            skill: 'react'
        },
        {
            id: 2,
            name: 'shi',
            skill: 'angular'
        },
        {
            id: 3,
            name: 'rati',
            skill: 'python'
        },
    ]
    const personList = persons.map(_person => <Person person= {_person}/> )

  return (
    <div>{ personList }</div>
  )
}

export default NameList