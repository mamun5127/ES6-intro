const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}

// console.log(glass);
// const keys = Object.keys(glass);

// [ 'name', 'color', 'price', 'isCleaned' ]

const values = Object.values(glass);
// [ 'glass', 'golden', 12, true]
// console.log(values)

const entries = Object.entries(glass);
// console.log(entries) 

// array of array two dymentional array

// [
//     [name: 'glass',]
// [color: 'golden',]
// [price: 12,]
// [asCleaned: true]
// ]


// gelete kora jay

// delete glass.isCleaned;
// // console.log(glass);


// delete ar aro option
const {isCleaned, ...shortGlass} = glass;
console.log(shortGlass);


// freeze
// Object.freeze(glass);
// glass.source = 'Bangladesh';
// glass.price = 5000;
// delete glass.name;
// console.log(glass);


Object.seal(glass);
glass.source = 'Bangladesh';
glass.price = 5000;
delete glass.name;
console.log(glass);

