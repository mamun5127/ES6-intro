const max = Math.max(6, 23, 45, 1, 89, 23)
const numbers =  [3, 5, 3, 45, 5, 43, 90, 32, 15];
const arrayMax = Math.max(...numbers);
// console.log(...numbers);
console.log(arrayMax)

// use spread operator for Copy
const friends = [4, 5, 87, 9];
const bondhu = friends;
const dosto = [...friends]
console.log(dosto)
friends.push(100)
console.log(dosto)
console.log(friends)

// sdvanced
 const sonkha = [...friends, 9999] //add extra element while copy 
console.log(sonkha)


