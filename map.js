const numbers = [5, 8, 9, 7, 4, 1, 2, 3, 5];

// for (const number of numbers) {

//     console.log(number);
// }

const doubleIt = number => number * 2;


const output = numbers.map(doubleIt)
// console.log(output);



// numbers.map(number => console.log(number))

const product = [
    { name: 'tShirt', price: 4513, color: 'yellow' },
    { name: 'burger', price: 512, color: 'black' },
    { name: 'singara', price: 12, color: 'white' },
    { name: 'alu chop', price: 5, color: 'halka vaja' }
]

const productName = product.map(product => console.log(product.name))

console.log(productName);





