const items = [
    {name: 'a',   price: 100},
    {name: 'b',   price: 200},
    {name: 'c',   price: 10},
    {name: 'd',   price: 5},
    {name: 'e',   price: 500},
    {name: 'f',   price: 1000},
    {name: 'g',   price: 25}
]

//filter
const filteredItems = items.filter(i => i.price <= 500 )
//console.log(filteredItems)

const itemNames = items.map(item => item.name)
console.log(filteredItems)













