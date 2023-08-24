import React from 'react'
import './myStyles.css'
function StyleSheet(props) {
  let className = props.primary ? 'primary' : ''
  return (
    <div>
        {/* <h1 className= 'primary'>styles</h1> */}
        {/* <h1 className= {className}>styles</h1> */}
        {/* multiple classes */}
        <h1 className= {`${className} font-xl`}>styles</h1>
    </div>
  )
}

export default StyleSheet