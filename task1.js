/* Задание 1. 
Напишите программу, которая работала бы следующим образом: 
в prompt вводится значение. С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, 
затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
Если это число, то вывести в консоль чётное оно или нечётное.
Если передано не число, выведите: «Упс, кажется, вы ошиблись».
*NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.*/

let num = + prompt("Введите символ");
  if (typeof num === "number" && num % 2 === 0) {
    alert ('Вы ввели четное число');
  } else if (typeof num === 'number' && num % 1 == 0){
  	alert ('Вы ввели нечетное число');
 //num % 2 != 0
  } else if (num * 0) {
  	alert ('Is Nan');
  } else {
  	alert ('Упс, кажется вы ошиблись');
  }