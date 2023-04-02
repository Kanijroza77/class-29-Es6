const numbers = [56, 28, 19, 75, 47, 41, 12, 13, 55];

const bigNumber = numbers.filter(number => number > 20);
// console.log(bigNumber);


const products = [
    { name: 'tShirt', price: 4513, color: 'yellow' },
    { name: 'burger', price: 512, color: 'black' },
    { name: 'singara', price: 12, color: 'white' },
    { name: 'alu chop', price: 5, color: 'halka vaja' }
]

const lowPriceItems = products.filter(item => item.price < 100);
// console.log(lowPriceItems);


const myNumbers = [56, 28, 19, 75, 47, 41, 19, 13, 59];

const findNumber = myNumbers.find(number => number == 19);

// console.log(findNumber);

const yourNumber = [56, 28, 19, 75, 47, 41, 19, 13, 59];
const herNumber = yourNumber.forEach(yourNumber => yourNumber)
console.log(herNumber);





