//1.Создайте переменные str1='Hello' и str2='world'. С помощью методов работы со строками вывести в консоль фразу

let str1 = 'Hello';
let str2 = 'world';
console.log(`${str1}, ${str2}!`);
// 2.Дана строка 'I learn computer science!'. Замените все пробелы на '_'.

let str3 = 'I learn computer science!';
let newStr = '';

for (let i = 0; i < str3.length; i++) {
    if (str3[i] === ' ') {
        newStr += '_';
    } else {
        newStr += str3[i];
    }
}
console.log(newStr);

//3.Дана строка 'I learn computer science!'. Выведите в консоль длину строки (сколько символов содержит строка)
let str4 = 'I learn computer science!';
let length = str4.length;

console.log('Длина строки: ' + length);
//4.Создать строку длиной 10.  чтобы на выходе она была забором. пример: "Я УчУсЬ В It-aCaDeMy".
let str = "Я учусь в It-academy";
let result = "";

for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
        result += str[i].toUpperCase();
    } else {
        result += str[i].toLowerCase();
    }
}
console.log(result);

//5.В переменной min записано число. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую)
let min = 23;

if (min < 15) {
    console.log("1-я четверть");
} else if (min < 30) {
    console.log("2-я четверть");
} else if (min < 45) {
    console.log("3-я четверть");
} else if (min < 60) {
    console.log("4-я четверть");
}
//6.написать программу, которая будет выводить название дней недели в зависимости от выбранного языка (как минимум русский и английский) используя if. язык можно вводить с клавиатуры, можно писать сразу в коде
//6.a
let language = prompt("Введите язык (ru или en):");

let monday, tuesday, wednesday, thursday, friday, saturday, sunday;

if (language === 'ru') {
    monday = 'Понедельник';
    tuesday = 'Вторник';
    wednesday = 'Среда';
    thursday = 'Четверг';
    friday = 'Пятница';
    saturday = 'Суббота';
    sunday = 'Воскресенье';
} else if (language === 'en') {
    monday = 'Monday';
    tuesday = 'Tuesday';
    wednesday = 'Wednesday';
    thursday = 'Thursday';
    friday = 'Friday';
    saturday = 'Saturday';
    sunday = 'Sunday';
}

console.log(monday);
console.log(tuesday);
console.log(wednesday);
console.log(thursday);
console.log(friday);
console.log(saturday);
console.log(sunday);

//6b
let lang = "ru"; // язык: "ru" или "en"
let day = 3; // число от 1 до 7

switch (lang) {
    case "ru":
        switch (day) {
            case 1:
                console.log("Понедельник");
                break;
            case 2:
                console.log("Вторник");
                break;
            case 3:
                console.log("Среда");
                break;
            case 4:
                console.log("Четверг");
                break;
            case 5:
                console.log("Пятница");
                break;
            case 6:
                console.log("Суббота");
                break;
            case 7:
                console.log("Воскресенье");
                break;
            default:
                console.log("Неверный номер дня");
        }
        break;

    case "en":
        switch (day) {
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
                break;
            case 7:
                console.log("Sunday");
                break;
            default:
                console.log("Invalid day number");
                break;
        }
        break;

    default:
        console.log("Неизвестный язык");
}
//7. Имеется объект с полями name и age. Если имя не заполнено - записать имя как John/Jane Doe

let person1 = {
    name: "",
    age: 25
};

if (person1.name === "") {
    person1.name = "John Doe";
}
console.log(person1);

// 8. Если имя будет Jane - вывести ее данные вида ‘This is Jane. She is 21’
let person2 = {
    name: "Jane",
    age: 21,
    gender: "female"
};
if (person2.name === "Jane") {
    console.log("This is Jane. She is " + person2.age);
} else {
    console.log("Name: " + person2.name);
    console.log("Age: " + person2.age);
}

