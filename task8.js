/* Задание 8.
Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y». Используйте шаблонные строки. */

//Вариант 1
let novemberMap = new Map();
novemberMap.set(null, 'grape');
novemberMap.set(0.78, undefined);
novemberMap.set('apple', 'orange');
novemberMap.set(true, false);
novemberMap.forEach(function (value, key) {
	console.log('Ключ = ' + key + ', Значение = ' + value);
});

//Вариант 2
let novemberMap = new Map();
novemberMap.set(null, 'grape');
novemberMap.set(0.78, undefined);
novemberMap.set('apple', 'orange');
novemberMap.set(true, false);
for (let item of novemberMap){
    console.log(`Ключ - ${item} - Значение`);
};
