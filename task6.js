/* Задание 6.
Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые. */

//Вариант 1:   
let arr = [ 0.65, "apple", undefined, 11, null, "grape", 11, "fifty four" ];
let x = true;
for(let i = 0; i < arr.length; i++){
   	if(arr[i] !== arr[0]){
       x = false;
   		}
    }
alert(x)

//Вариант 2:
let arr = [ 0.65, "apple", undefined, 11, null, "grape", 11, "fifty four" ];
alert(arr.every(item => item == arr[0]));
