/* Задание 3.
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".*/

//Вариант 1:   
const word = 'Hello';
const reverse = word.split('').reverse().join('');
console.log(reverse)

//Вариант 2:   
const word = "Hello";
const reverse=[...word].reduce((prev,next)=>next+prev);
console.log(reverse);
