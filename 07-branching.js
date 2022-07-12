/*  операторы ветвления if
 */
// if(5) {
// console.log('hfhfhg');
// }
// console.log('oipoip');
// если да true - выполняй тело, если нет false не выполняй




/*  операторы ветвления if...else
 */
// if(5 > 30) {
//     console.log('x > y');
// } else {
//     console.log('x < y');
// }


/*  операторы ветвления else...if
 */
// const salary = 200;
// if(salary <= 500) {
//     console.log('Уровень 1');
// } else if(salary > 500 && salary <= 1500) {
//     console.log('Уровень 2');
// } else if(salary > 1500 && salary < 3000) {
//     console.log('Уровень 3');
// } else {
//     console.log('Уровень 4');
// }



/*  Тернарный оператор
 */
// const balance = 1000;
// let message;
// if (balance >= 0) {
//     message = 'Позитивный баланс';
// } else {
//     message = 'Негативный баланс';
// }
// console.log(message);
// это все заменяется на следуюющие:
// const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';
// console.log(message);



/*  Блочная область видимости переменных
 */
// if(true) {
//    const a = 5;
//    console.log(a); видно, бо в дужках...бо задана в джуках...глобальна доступна а внутри нет...область видимости
// }

// console.log(a); не видно