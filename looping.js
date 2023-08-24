// for of use on array or string not in Object
// for in use on Object 



const numbers = [1, 6, 8, 4];
// for (let i = 0; i < numbers.length; i++){}
// while

for (const num of numbers){
    // console.log(num);
}

// const nobab = 'siraj ud doula';
// for(const char of nobab){
// //   console.log(char);  
// }

const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}

for(const key in glass){
    console.log(key, value)
}