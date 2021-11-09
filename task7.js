/* Задание 7.
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее. */

let arr = [0, 174, undefined, 86, 0, null, 59, "I'm a student", 0.7, 28, "Skillfactory", 311, null, "Fronfend"];

let zeros=0;
let strs=0;
let countables=0;
let uncountables=0;
let nulls=0;

for (i = 0; i<arr.length; i++) {
        if (typeof arr[i] == 'string') {
        strs++;
    } else if (arr[i]==null){
        nulls++;
    } else if (arr[i]==0) {
        zeros++;
    } else if (arr[i] % 2 === 0) {
        countables++;
    } else {
        uncountables++;
    }   
}
alert(`В массиве: \n Нулей - ${zeros} \n Строк - ${strs} \n Нуллов - ${nulls} \n Четных - ${countables} \n Нечетных - ${uncountables}`)
