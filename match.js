const numbers = [12, 344, 56, 565, 87, 89, 676, 89];

// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number)
// }

// simplified version of for loop
for(let number of numbers){
    console.log(number)
}
console.log('-------------------------------')
// example below
const products=[
    {id: 1, name: 'sumsang phone', price: 27000},
    {id: 2, name: 'xaomi phone', price: 25000},
    {id: 3, name: 'Mac book air lap', price: 107000},
    {id: 4, name: 'Poco-A67', price: 37000},
    {id: 5, name: 'maximus phone', price: 47000},
    {id: 6, name: 'Ipad', price: 17000},
    {id: 7, name: 'realme tab', price: 57000},
    {id: 8, name: 'realme Phone', price: 77000},
    {id: 9, name: 'honour', price: 67000},
    {id: 10, name: 'huewei Phone', price: 87000},
    {id: 11, name: 'Iphone-18pro max', price: 21700},
    {id: 12, name: 'Linux phone', price: 29000},
]
// for(let product of products){
//     console.log(product)
// }
for(let i = 0; i < products.length; i++){
    const product = products[i]
    // console.log(product)
}

function matchProducts(products, search){
    const matched = [];
    for(let product of products){
        // console.log(product.name.includes(search))
        // if(product.name.includes(search)){
        //     matched.push(product);
        // } to check case sensitive
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
const result = matchProducts(products, 'phone');
console.log(result)









