/* Длина строки
 */
// const message = 'В этой строке 26 символов.';
// console.log(message.length);

 

/* Конкатенция строк
 */
// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// console.log(firstName + lastName);
// а якщо хочете між ними пробіл, то + можна по іншому записати
// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const fullNeme = firstName + ' ' + lastName;
// console.log(fullNeme);




/* ЗАДАЧА Напиши скрипт который выведет строку в формате: Гость х у поселяется z номер q,
поставив вместо  х у z q значение переменных
 */
// const room = 716;
// const type = 'VIP';
// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const welcomeMsg = 'Гость ' + firstName + ' ' + lastName + ' поселяется в ' + type + ' номер ' + room;
// console.log(welcomeMsg);
// Так робити дуже не зручно і у нас для цього є шаблонний літерал - template strings
// console.log(`Гость ${firstName} ${lastName} поселяется ${type} номер ${room}`);
// тобто писати вираз з косими кавичками
// або запис по іншому
// const welcomeMsg = `Гость ${firstName} ${lastName} поселяется ${type} номер ${room}`;
// console.log(welcomeMsg);

// const quantiti = 1;
// const orderMsg = `Вы заказали ${quantiti} холодильников`;
// console.log(orderMsg);




/* Нормализация с методом toLowerCase
 */
// const brand = 'Samsung';
// const normalizedBrand = brand.toLowerCase();
// console.log(normalizedBrand);
// або
// let brand = 'Samsung';
// brand = brand.toLowerCase();
// console.log(brand);
// Під яким індексом стоїть буква:
// console.log(brand[5]);
// видрізати першу половину:
// console.log(brand.slice(1).toLowerCase());
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);




/* Поиск в строке 
 */
// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'распродажа';

// const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
// const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
// const string3 = 'Рекламная компания #fatliversmatter';

// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1));
// console.log(string2.toLowerCase().includes(blacklistedWord2));
// // ми це зробили , бо у нас було прописано маленькими буквами, а в там великими - щоб точно знати ми нормалізували

// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));