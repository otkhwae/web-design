import React from 'react' 

function FunctionClick () {
    function clickHandler (){
        console.log('functional handler')
    }

    return (
        <div>
            <button onClick= {clickHandler}>function click</button>
        </div>
    )
}

export default FunctionClick



