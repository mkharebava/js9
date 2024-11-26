const numbers = [3, 7, 12, 5, 8, 19]
console.log(numbers);
console.log(`squared`);
const squared = numbers.map(num => num * num)
console.log(squared);
console.log(`even`);
const evenNumbers = numbers.filter(num => num % 2 == 0)
console.log(evenNumbers);
console.log(`sum`);
const sum = numbers.reduce((acc, curr) => acc + curr, 0)
console.log(sum);

console.log(`if number is more than 10 and even, function returns true, else it returns false`);
function checknumbers(numb) {
    if (numb > 10 && numb % 2 == 0) {
        return true
    } else return false
}

console.log(checknumbers(14));