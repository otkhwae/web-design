import React from 'react'

function Products() {
    // array of strings
    //const goods = ['phones','laptops','tablet']
    //const goodList = goods.map(good => <h3>{good}</h3>)

    // array of obj
    const goods = [
        {id: 1, name: 'laptop', price: 500},
        {id: 2, name: 'phone', price: 200},
        {id: 3, name: 'modem', price: 50},
        {id: 4, name: 'laptop', price: 900}
    ]
    // const goodList = goods.map(good => <h3 key={good.id}>
    //     {good.name}</h3>)
        const goodList = goods.map((good,index) => <h3 key={index}>
            {good.name}</h3>)

    const fruits = ['apple','mango','banana']
    const fruitsList = fruits.map((fruit, index) => <h3 key= {index}>
        {fruit}</h3> )

    return (
    <div>
        {/* {goods.map( good => <h3>{good}</h3>)} */}
        {/* {goodList}  */}
        {fruitsList}

    </div>
  )
}


export default Products