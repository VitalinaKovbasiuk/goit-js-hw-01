/* Парс числа с Number.parseInt (бере тільки ціле число) - Number.parseFloat (бере число і після крапки 200.74)
 */
// let elementWidth = '50px'
// elementWidth =  Number.parseInt(elementWidth);
// console.log('elementWidth:', elementWidth);
// let elementHeigth = '200.74px';
// elementHeigth = Number.parseFloat(elementHeigth);
// console.log('elementHeigth:', elementHeigth);




/* Метод toFixed - великі числа після коми відсікає і залишає тільки останні 2
 */
// let salary = 1300.16472;
// salary = salary.toFixed(2);
// salary = Number(salary);
// console.log(salary);
/* короткий запис
 */
// let salary = 1300.16472;
// salary = Number(salary.toFixed(2));
// console.log(salary);
// console.log(Number(salary.toFixed(2)));




/* Преобразование или приведение к числу Number(velue)
 */
// let quantiti = '30';
// let velue = 'Эту строку невозможно привести к числу'
// console.log(Number(quantiti));
// console.log(Number(velue));



/* Обьект Math
 */
// const base = 2;
// const power = 5;
// const result = Math.pow(2, 3);
// console.log(result);
/* або
 */
// const base = 2;
// const power = 5;
// const result = Math.pow(base, power);
// console.log(result);
// console.log(2 ** 5);
// console.log(base ** power);

// Math.sqrt() - квадратний корінь




/* ЗАДАЧА - напиши скрипт который просит пользователя ввести число в степень ,
 вводит число в эту степень и выводит результат в консоль
 */
// 1. Попросить ввести число и сохранить в переменную.
// let base = prompt('Давай число');
// base = Number(base);
// console.log(base);
// 2. Попросить ввести степень и сохраниь переменную.
// let power = prompt('Давай степень');
// power = Number(power);
// console.log(power);
// 3. Возвести введенные данные в стeпень и вывести.
// const result = base ** power;
// console.log(result);



/* Генерим псевдослучайные числа Math.randome - генерує випадкове число від 0 до 1 при кожному оновленні
 */
// Формула Генерує рандомне число в діапазоні, який задасиш
// Math.random() * (max - min) + min
// console.log(Math.random() * (50 - 30) + 30);
// або
// const max = 80;
// const min = 10;
// console.log(Math.random() * (max - min) + min);

// а щоб округили це все записуємо - :
// const max = 80;
// const min = 10;
// const result = Math.random() * (max - min) + min;
// console.log(Math.round(result));
// або 
// const max = 80;
// const min = 10;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// Це були числа, а є наприклад сайт, де заходиш і зминюються кожне оновлення фон сайту - можна записати так:
// const colors = ['tomato', 'teal', 'orange', 'deeppink'];
// const max = colors.length -1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;