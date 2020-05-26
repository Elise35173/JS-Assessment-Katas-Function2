function add(x, y) {
    return x + y
}
let a = add(2,4)
console.log(a)

function multiply(x, y) {
    let total = 0
    for (let count = 0; count < y; count++) {
        total = add(total, x)
    }
    return total
}
let b = multiply(6, 4)
console.log(b)

function power(x, n) {
    let total = 1
    for (let count = 0; count < n; count++) {
        total = multiply(total, x)
    }
    return total
}
let c = power(2, 8)
console.log(c)

function factorial(x) {
    let total = 1
    for (let count = 1; count <= x; count ++) {
        total = multiply(count, total)
    }
    return total
}
let d = factorial(4)
console.log(d)

function fibonacci(x) {
    let previousNumber = 0
    let currentNumber = 1
    let result = 0
    let fibTotal = 0
    for (let count = 3; count <= x; count ++) {
        result = add(previousNumber, currentNumber)
        previousNumber = currentNumber
        currentNumber = result
        fibTotal = result
    }
    return fibTotal
}
let e = fibonacci(10)
console.log(e)