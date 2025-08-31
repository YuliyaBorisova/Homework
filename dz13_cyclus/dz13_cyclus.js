// задание 1 Создайте массив с дубликатами и напишите код, который удаляет все дубликаты, оставляя только уникальные значения. Выведите новый массив в консоль.
let numbers = [1, 2, 3, 2, 4, 5, 3, 6, 4, 7, 5];
let uniqueNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (!uniqueNumbers.includes(numbers[i])) {
        uniqueNumbers.push(numbers[i]);
    }
}
console.log(uniqueNumbers);

// задание 2. Создайте переменную с числом и используйте цикл для вычисления его факториала.
let number = 5;
let factorial = 1;
let i = 1;
while (i <= number) {
    factorial *= i;
    i++;
}
console.log("Факториал числа " + number + " равен " + factorial);
// задание 3. Создайте переменную с годом и используйте условие для проверки, является ли этот год високосным. Выведите соответствующее сообщение в консоль

for (let year = 2010; year <= 2025; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " год — високосный");
    } else {
        console.log(year + " год — не високосный");
    }
}
// задание 4.Создайте массив и используйте цикл для подсчета количества вхождений каждого элемента. Выведите результат в консоль

let items = ['яблоко', 'банан', 'яблоко', 'апельсин', 'банан', 'банан', 'груша'];
let counts = {};
for (let i = 0; i < items.length; i++) {
    let item = items[i];
    if (counts[item]) {
        counts[item]++;
    } else {
        counts[item] = 1;
    }
}

console.log(counts);

// задание 5. Создайте объект с несколькими свойствами и напишите код для подсчета количества свойств в этом объекте. Выведите результат в консоль.

let person = {
    name: "Анна",
    age: 30,
    city: "Москва",
    profession: "Программист"
};
let count = 0;
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        count++;
    }
}
console.log("Количество свойств в объекте: " + count);

// задание 6. Создайте массив объектов пользователей с именем и возрастом. Используйте цикл для создания нового массива, содержащего только пользователей старше определенного возраста. Выведите новый массив в консоль.

let users = [
    { name: "Оля", age: 15 },
    { name: "Саша", age: 18 },
    { name: "Паша", age: 21 },
    { name: "Лена", age: 14 },
    { name: "Ваня", age: 17 }
];
let adults = [];

for (let i = 0; i < users.length; i++) {
    if (users[i].age > 16) {
        adults.push(users[i]);
    }
}

console.log(adults);

 // задание 7. создать массив, заполнить его случайными числами от 0 до 100, чтобы длина массива была равна 10
// random = Math.floor(Math.random() * 101)
// 101- максимальное число рандома, не включительно
let randomNumbers = [];
for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * 101);
    randomNumbers.push(random);
}
console.log(randomNumbers);

// задание 8. Дана произвольная строка. разверните ее используя цикл for (без reverse)
let original = "Арбуз!";
let reversed = "";

for (let i = original.length - 1; i >= 0; i--) {
    reversed += original[i];
}
console.log("Оригинал: " + original);
console.log("Развёрнутая: " + reversed);


