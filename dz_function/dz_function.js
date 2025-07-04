//1.	Напишите функцию isPrime(n), которая проверяет, является ли число n простым.
let number = 15;
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
if (isPrime(number)) {
    console.log(number + " — простое число");
} else {
    console.log(number + " — не простое число");
}

//2.Напишите функцию isPalindrome(str), которая проверяет, является ли строка палиндромом (читается одинаково в прямом и обратном направлении).

 let text= "довод"

function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

function uniqueValues(arr) {
    return [...new Set(arr)];
}
if (isPalindrome(text)) {
    console.log(text + " — это палиндром");
} else {
    console.log(text + " — это не палиндром");
}

//3.Создайте функцию uniqueValues(arr), которая возвращает новый массив без повторяющихся значений из исходного массива arr.

let numbers= [1,2,3,3,4,5,6,6];
let unique = uniqueValues(numbers);
function uniqueValues(arr) {
    return [...new Set(arr)];
}

console.log("исходный массив:",numbers);
console.log ("новый массив:",unique);

//4.Напишите функцию sumRange(start, end), которая возвращает сумму всех целых чисел от start до end.
let result = sumRange (1,8);
console.log("сумму всех целых чисел:", result);

function sumRange(start, end) {
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
}
//5.Напишите функцию, которая принимает любую строку и выводит в консоль массив, содержащий только те символы, которые встречаются в строке только один раз.
function uniqueChars(str1) {
    let result = [];

    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        if (str1.indexOf(char) === str1.lastIndexOf(char)) {
            result.push(char);
        }
    }

    console.log("Уникальные символы:", result);
    return result;
}

uniqueChars("ааасшшокпп");

