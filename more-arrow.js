const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;

// single parameter or one parameter
const getAge = (person) => person.age;
const student = { name: 'annanto', age: 45}
const age = getAge(student)
console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([5,9,88,2,13])
console.log(third)

// no parameter
const getPI = () => Math.PI
console.log(getPI())

// large arrow function
const doMAth = (x, y, z) => {
    const sum = x + y + z;
    const mult = z * y * z;
    const result = sum + mult
    return result
}