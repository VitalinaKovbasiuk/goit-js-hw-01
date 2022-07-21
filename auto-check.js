/* Завдання 1 автоперевірка
 */
// ОГОЛОШЕННЯ ЗМІННИХ

// Оголоси дві змінні, productName для назви товару, і pricePerItem для зберігання ціни за штуку. 
// При оголошенні надай змінним наступні значення:

// назва - рядок "Droid";
// ціна за штуку - число 2000.

// const productName = 'Droid';
// console.log(productName);

// const pricePerItem = 2000;
// console.log(pricePerItem);

/* Завдання 2 автоперевірка
 */
// ПЕРЕВИЗНАЧЕННЯ ЗНАЧЕННЯ ЗМІННОЇ

// Ім'я товару змінили на "Repair droid" і збільшили його ціну на 1500 кредитів. 
// Перевизнач значення змінних pricePerItem і productName після їх оголошення.
// let productName = "Droid";
// let pricePerItem = 2000;

// productName = "Repair droid";
// pricePerItem += 1500;

// console.log(pricePerItem); 
// console.log(productName);



/* Завдання 3 автоперевірка
 */
// ТИПИ ПРИМІТИВІВ (ЧИСЛА, РЯДКИ, БУЛІ)

// Оголоси наступні змінні, використовуючи ключове слово const або let, і присвой їм відповідні значення.

// topSpeed - число 160.
// distance - число 617.54.
// login - рядок "mango935".
// isOnline - буль true.
// isAdmin - буль false.
// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;

// console.log(topSpeed);
// console.log(distance);
// console.log(login);
// console.log(isOnline);
// console.log(isAdmin);



/* Завдання 4 автоперевірка
 */
// МАТЕМАТИЧНІ ОПЕРАТОРИ
// Доповни код, присвоївши змінній totalPrice вираз для підрахунку загальної суми замовлення. 
// Змінна pricePerItem зберігає ціну однієї одиниці товару, а orderedQuantity - кількість одиниць товару в замовленні.
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);



/* Завдання 5 автоперевірка
 */
// ШАБЛОННІ РЯДКИ

// Оголоси змінну message і запиши в неї повідомлення про покупку, рядок у форматі: 
// "You picked <назва товару>, price per item is <ціна товару> credits". 
// Де <ім'я каталогу> і <ціна товару> — це значення змінних productName і pricePerItem. 
// Використовуй синтаксис шаблонних рядків.
// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;



/* Завдання 6 автоперевірка
 */
// ЗАДАЧА: ЗАМОВЛЕННЯ ПРОДУКТУ

// Магазин з продажу ремонтних дроїдів готовий до відкриття, залишилося написати скрипт для їх замовлення. 
// Оголоси змінні та присвой їм відповідні значення:

// pricePerDroid - ціна одного дроїда, значення 800
// orderedQuantity - кількість дроїдів у замовленні, значення 6
// deliveryFee - вартість доставки, значення 50
// totalPrice - загальна сума замовлення до сплати, не забудь про вартість доставки
// message - повідомлення про стан замовлення у форматі "You ordered droids worth <total price> credits. 
// Delivery (<delivery fee> credits) is included in total price."
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = (pricePerDroid * orderedQuantity) + deliveryFee ;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// console.log(totalPrice);
// console.log(message);



/* Завдання 7 автоперевірка
 */
// ОГОЛОШЕННЯ І ВИКЛИК ФУНКЦІЇ

// Оголоси функцію sayHi, всередині якої додай console.log() з рядком "Hello, this is my first function!".
//  Після оголошення виклич функцію sayHi.
// function sayHi() {
//     console.log("Hello, this is my first function!")
// }
// sayHi();



/* Завдання 8 автоперевірка
 */
// ПАРАМЕТРИ ТА АРГУМЕНТИ

// Функція add повинна вміти додавати три числа і виводити результат у консоль. 
// Додай функції add три параметри: a, b і c, які будуть отримувати значення аргументів під час її виклику.
// Доповни console.log() таким чином, щоб він логував рядок "Addition result equals <result>", 
// де <result> - це сума переданих чисел.
// function add(a, b, c,) {
//     console.log(`Addition result equals ${a + b + c}`);
//   }
  
//   add(15, 27, 10);
//   add(10, 20, 30);
//   add(5, 10, 15);



/* Завдання 9 автоперевірка
 */
// ПОВЕРНЕННЯ ЗНАЧЕННЯ
// Доповни код функції add таким чином, щоб вона повертала результат додавання значень трьох параметрів: a, b і c.
// function add(a, b, c) {
//   return a + b + c;
//   }
  
//   add(2, 5, 8); // 15
//   let result = add(2, 5, 8);
//   console.log(result);
  
//   console.log(add(15, 27, 10));
//   console.log(add(10, 20, 30));
//   console.log(add(5, 10, 15));




/* Завдання 10 автоперевірка
 */
// ЗАДАЧА: ШАБЛОННІ РЯДКИ 2.0

// Функція makeMessage(name, price) складає і повертає повідомлення про покупку. 
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

// name - назва товару
// price - ціна товару
// Доповни код функції таким чином, щоб у змінну message записувався рядок 
// "You picked <product name>, price per item is <product price> credits", де <product name> і 
// <product price> - це значення параметрів name і price. Використовуй синтаксис шаблонних рядків.

// Увага
// Зверни увагу на те, що в коді відсутній виклик функції makeMessage. 
// З цього завдання і далі ми самі будемо викликати твої функції і перевіряти те, як вони працюють. 
// Результат наших перевірок ти побачиш у блоці Результати під редактором коду.
// function makeMessage (name, price) {
//     const message = `You picked ${name}, price per item is ${price} credits.`;
//     return message;
//   };




/* Завдання 11 автоперевірка
 */
// ЗАДАЧА: МАТЕМАТИЧНІ ОПЕРАТОРИ 2.0

// Функція calculateTotalPrice рахує і повертає загальну суму покупки. 
// Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

// orderedQuantity - кількість одиниць товару в замовленні;
// pricePerItem - ціна однієї одиниці товару.
// Доповни код функції таким чином, щоб у змінну totalPrice записувалася загальна сума покупки - 
// результат множення кількості товарів на ціну одного.
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//     const totalPrice = orderedQuantity * pricePerItem;
//     return totalPrice;
//   };




/* Завдання 12 автоперевірка
 */
// ЗАДАЧА: ЗАМОВЛЕННЯ ПРОДУКТУ 2.0

// Функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) 
// складає і повертає повідомлення про покупку ремонтних дроїдів. 
// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику.

// orderedQuantity - кількість дроїдів у замовленні
// pricePerDroid - ціна одного дроїда
// deliveryFee - вартість доставки
// Доповни код функції таким чином, щоб вона повертала повідомлення про замовлення 
// у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.". 
// Не забудь про ціну доставки в обчисленнях загальної вартості.
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   const makeOrderMessage = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`
//     return makeOrderMessage;
//     makeOrderMessage()
//   }


/* Завдання 13 автоперевірка
 */
// ОПЕРАТОРИ ПОРІВНЯННЯ >, >=, < І <=

// Функція isAdult оголошує один параметр age (вік), значення якого буде задаватися під час її виклику. 
// Присвой змінній passed вираз перевірки віку користувача на повноліття. 
// Людина вважається повнолітньою у віці 18 років і старше.
// function isAdult(age) {

//     const passed = age >= 18;
//     return passed;
//   }



/* Завдання 14 автоперевірка
 */
// ОПЕРАТОРИ ПОРІВНЯННЯ === І !==

// Функція isValidPassword (password) перевіряє рівність збереженого і 
// введеного паролів і повертає результат перевірки - буль true або false. 
// Змінна SAVED_PASSWORD зберігає значення попередньо збереженого пароля. 
// Введений пароль передається у параметр password.

// Присвой змінній isMatch вираз перевірки рівності введених і попередньо збережених паролів. 
// Результатом виразу перевірки повинно бути true, якщо значення збігаються, і false - якщо ні.
// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'jqueryismyjam';
    
//     const isMatch = password === SAVED_PASSWORD;
    
//     return isMatch;
//   }




/* Завдання 15 автоперевірка
 */
// ІНСТРУКЦІЯ IF...ELSE

// Додай вираз перевірки повноліття користувача, значення параметра age, в умову для інструкції if.

// Якщо користувач повнолітній, повинен виконуватися блок if і у змінну message записується рядок "You are an adult".
// В іншому випадку повинен виконуватися блок else і записується рядок "You are a minor".
// function checkAge(age) {
//     let message;
  
//     if (age >= 18) { 
//       message = 'You are an adult';
//     } else {
//       message = 'You are a minor';
//     }
  
//     return message;
//   }
  


/* Завдання 16 автоперевірка
 */
// ЗАДАЧА: СКЛАД ТОВАРІВ

// Функція checkStorage(available, ordered) перевіряє можливість оформлення 
// замовлення і повертає повідомлення про результат. Вона оголошує два параметри, 
// значення яких будуть задаватися під час її виклику:

// available - загальна кількість товарів на складі
// ordered - одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, що:

// Якщо в замовленні вказане число, яке перевищує кількість товарів на складі, 
// у змінну message записується рядок "Not enough goods in stock!".
// В іншому випадку записується рядок "Order is processed, our manager will contact you.".
// function checkStorage(available, ordered) {
//     let message; 
//       if (available < ordered) { 
//         message = 'Not enough goods in stock!';
//       } else {
//         message = 'Order is processed, our manager will contact you.';
//       }
    
//     return message;
//   }
  



/* Завдання 17 автоперевірка
 */
// КОМБІНОВАНИЙ ОПЕРАТОР ПРИСВОЄННЯ

// Заміни вирази зі стандартними математичними операторами на комбінований оператор присвоєння 
// з додаванням, відніманням, множенням і діленням.
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;


// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;



/* Завдання 18 автоперевірка
 */
// ЗАДАЧА: ПЕРЕВІРКА БАЛАНСУ

// Станція з продажу ремонтних дроїдів готова до запуску, 
// залишилося написати програмне забезпечення для відділу продажів.

// Функція makeTransaction(pricePerDroid, orderedQuantity, customerCredits) 
// виконує транзакцію з продажу дроїдів і повертає повідомлення про результат операції. 
// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// pricePerDroid - ціна одного дроїда
// orderedQuantity - кіл-сть замовлених дроїдів
// customerCredits - сума коштів на рахунку клієнта
// Доповни її наступним функціоналом:

// Оголоси змінну totalPrice для зберігання загальної суми замовлення і присвой їй вираз розрахунку цієї суми.
// Додай перевірку, чи зможе клієнт оплатити замовлення:
// якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, 
// запиши у змінну message рядок "Insufficient funds!";
// в іншому випадку, відніми суму покупки з рахунку клієнта і 
// запиши у змінну message повідомлення: "You ordered <число> droids, you have <число> credits left".
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
    
//     const totalPrice = (pricePerDroid * orderedQuantity);
//      if  (totalPrice > customerCredits){
//         message = 'Insufficient funds!';}
//      else {
//       message = `You ordered ${orderedQuantity} droids, you have ${customerCredits-totalPrice} credits left`
//     };
  
//     return message;
//   }



/* Завдання 19 автоперевірка
 */
// БЛОК ELSE...IF

// Функція checkPassword(password) отримує пароль користувача в параметр password, 
// перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і 
// повертає повідомлення про результат порівняння, яке зберігається у змінній message.

// Якщо значення параметра password дорівнює null, значить користувач скасував операцію і 
// в message записується рядок "Canceled by user!".
// Якщо значення параметра password збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
// Якщо жодна з попередніх умов не виконалася, у змінну message записується рядок "Access denied, wrong password!".
// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;
  
//     if (password === null) { 
//       message =  'Canceled by user!';
//     } else if (password === ADMIN_PASSWORD) { 
//       message = 'Welcome!';
//     } else {
//       message = 'Access denied, wrong password!';
//     }
  
//     return message;
//   }



/* Завдання 20 автоперевірка
 */
// ЗАДАЧА: СКЛАД ТОВАРІВ 2.0

// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. 
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

// available - доступна кількість товарів на складі
// ordered - одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, що:

// Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, 
// у змінну message присвоюється рядок "There are no products in the order!".
// Якщо товарів у замовленні більше, ніж доступно товарів на складі, 
// то у змінну message присвоюється рядок "Your order is too large, there are not enough items in stock!".
// В іншому випадку у змінну message присвоюється рядок "The order is accepted, our manager will contact you".
// function checkStorage(available, ordered) {
//     let message;
    
//   if (ordered === 0) { 
//         message =  'There are no products in the order!';
//       } else if (ordered > available) { 
//         message = 'Your order is too large, there are not enough items in stock!';
//       } else {
//         message = 'The order is accepted, our manager will contact you';
//       }
    
//     return message;
//   }



/* Завдання 21 автоперевірка
 */
// ЛОГІЧНЕ «І» (ОПЕРАТОР &&)

// Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок. 
// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// number - число, входження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Присвой змінній isInRange вираз перевірки входження number у числовий проміжок від start до end. 
// Тобто число повинно бути більшим або дорівнювати start, і меншим або дорівнювати end. 
// Результатом виразу перевірки буде буль true або false.
// function isNumberInRange(start, end, number) {
//     const isInRange = number >= start && number <= end; 
  
//     return isInRange;
//   }
  



/* Завдання 22 автоперевірка
 */
// ЛОГІЧНЕ «АБО» (ОПЕРАТОР ||)

// Функція checkIfCanAccessContent(subType) перевіряє, чи може користувач отримати доступ до контенту. 
// Перевірка відбувається за типом передплати. Отримати доступ можуть тільки користувачі з передплатою pro або vip.

// Присвой змінній canAccessContent вираз перевірки передплати. 
// Якщо значення параметра subType дорівнює рядкам "pro" або "vip", користувач отримає доступ. 
// Результатом виразу перевірки буде буль true або false.
// function checkIfCanAccessContent(subType) {
//     const canAccessContent = (subType === "pro" || subType === "vip"); 
  
//     return canAccessContent;
//   }



/* Завдання 23 автоперевірка
 */
// ЛОГІЧНЕ «НЕ» (ОПЕРАТОР !)

// Функція isNumberNotInRange(start, end, number) перевіряє, чи не входить число у проміжок. 
// Тобто число повинно бути меншим або дорівнювати start і більшим або дорівнювати end. 
// Результатом виразу перевірки буде буль true або false.

// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// number - число, невходження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Присвой змінній isNotInRange вираз інверсії значення змінної isInRange, використовуючи оператор !.
// function isNumberNotInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     const isNotInRange = !isInRange; 
  
//     return isNotInRange;
//   }



/* Завдання 24 автоперевірка
 */
// ЗАДАЧА: ОБЧИСЛЕННЯ ЗНИЖКИ

// Функція getDiscount(totalSpent) визначає значення знижки, 
// залежно від загальної суми витрачених грошей (параметр totalSpent) в магазині за весь час (партнерська програма). 
// Знижка записується у змінну discount і повертається з функції як результат її роботи.

// Використовуючи розгалуження і логічні оператори, доповни код функції.

// Якщо витрачено від 50000 (включно) або більше кредитів - знижка 10% (золотий партнер)
// Якщо витрачено від 20000 (включно) до 50000 кредитів - знижка 5% (срібний партнер)
// Якщо витрачено від 5000 (включно) до 20000 кредитів - знижка 2% (бронзовий партнер)
// Якщо витрачено менше 5000 кредитів - знижка 0 (базовий партнер)
// Значення знижок кожного рівня зберігаються в однойменних константах 
// BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT і GOLD_DISCOUNT.

// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;
  
  
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   }
//   else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   }
//   else if (totalSpent >= 5000 && totalSpent < 20000) {
//    discount = BRONZE_DISCOUNT;
//   }
//   else {
//     discount = BASE_DISCOUNT;
//   }
//   console.log(getDiscount);
//     return discount;
//   }
  



/* Завдання 25 автоперевірка
 */
// ТЕРНАРНИЙ ОПЕРАТОР

// Виконай рефакторинг рішення задачі «Склад товарів», замінивши інструкцію if...else тернарним оператором.
// function checkStorage(available, ordered) {
//     let message;
//   message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
//   console.log(message);
//     return message;
//   }




/* Завдання 26 автоперевірка
 */
// ЗАДАЧА: ПЕРЕВІРКА ПАРОЛЯ

// Функція checkPassword(password) порівнює переданий їй пароль (параметр password) 
// зі збереженим паролем адміністратора (константа ADMIN_PASSWORD) і повертає рядок з повідомленням про результат.
// Використовуючи тернарний оператор, доповни функцію таким чином, що:
// Якщо значення password і ADMIN_PASSWORD збігаються, присвой змінній message рядок "Access is allowed".
// В іншому випадку, присвой message рядок "Access denied, wrong password!".
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
    
//   message = password == ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
    
//     return message;
//   }



/* Завдання 27 автоперевірка
//  */
// ІНСТРУКЦІЯ SWITCH

// Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (параметр type), 
// перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну, що зберігається у змінній price.
// Якщо значення параметра type - це рядок:
// "starter" - ціна передплати 0 кредитів.
// "professional" - ціна передплати 20 кредитів.
// "organization" - ціна передплати 50 кредитів.
// Спочатку в тілі функції була інструкція if...else, яка виглядала ось так.

// if (type === "starter") {
//   price = 0;
// } else if (type === "professional") {
//   price = 20;
// } else if (type === "organization") {
//   price = 50;
// }
// Після рефакторингу інструкція if..else була замінена на switch. 
// Доповни код інструкції switch, щоб функція працювала правильно.
// function getSubscriptionPrice(type) {
//     let price;
//    switch (type) { 
//       case ("starter"): 
//         price = 0; 
//         break;
//       case ("professional"): 
//         price = 20; 
//         break;
//       case ("organization"): 
//         price = 50; 
//         break;
//     }
//     return price;
//   }




/* Завдання 28 автоперевірка
 */
// ІНСТРУКЦІЯ SWITCH З БЛОКОМ DEFAULT

// Функція checkPassword(password) отримує пароль в параметр password, 
// перевіряє його на збіг з паролем адміністратора у змінній 
// ADMIN_PASSWORD і повертає повідомлення про результат порівняння, яке зберігається у змінній message.
// Якщо значення параметра password:
// дорівнює null, значить користувач скасував операцію і в message записується рядок "Canceled by user!".
// збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
// не задовольняє жодну з попередніх умов, у змінну message записується рядок "Access denied, wrong password!".
// Зроби рефакторинг коду, замінивши інструкцію if..else на switch, і не забудь про блок default (аналог else).
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//   switch (password) { 
//         case null: 
//           message = "Canceled by user!"; 
//    break;
//       case ADMIN_PASSWORD: 
//           message = "Welcome!"; 
//           break; 
//      default: message = "Access denied, wrong password!";
//     }
//     return message;
//   }



/* Завдання 29 автоперевірка
 */
// ЗАДАЧА: ДОСТАВКА ТОВАРУ
// Функція getShippingCost(country) повинна перевіряти можливість доставки товару в країну 
// користувача (параметр country) і повертати повідомлення про результат, що зберігається у змінній message. 
// Обов'язково використовуй інструкцію switch.

// Формат рядка, що повертається "Shipping to <country> will cost <price> credits", 
// де замість <country> і <price>, необхідно підставити відповідні значення.
// Список країн і вартість доставки:
// China - 100 кредитів
// Chile - 250 кредитів
// Australia - 170 кредитів
// Jamaica - 120 кредитів
// Зі списку видно, що доставка можлива не скрізь. Якщо зазначена країна відсутня у списку, 
// то функція повинна повернути рядок "Sorry, there is no delivery to your country"
// function getShippingCost(country) {
//     let message;
    
//   switch (country) { 
//           case ("China"): 
//            message = "Shipping to China will cost 100 credits"; 
//           break;
//         case ("Chile"): 
//           message = "Shipping to Chile will cost 250 credits"; 
//           break;
//         case ("Australia"): 
//           message = "Shipping to Australia will cost 170 credits"; 
//           break;
//        case ("Jamaica"): 
//           message = "Shipping to Jamaica will cost 120 credits"; 
//           break;
//           default: message = "Sorry, there is no delivery to your country";
//       }
//     return message;
//   }
  



/* Завдання 30 автоперевірка
 */
// ДОВЖИНА РЯДКА

// Функція getNameLength(name) приймає ім'я (параметр name) і повертає рядок, 
// в якому вказана його довжина. Доповни шаблонний рядок у змінній message довжиною рядка з параметра name.

// function getNameLength(name) {
//     let message = `Name ${name} is ${name.length} characters long`; 
//     return message;
//   }
  


/* Завдання 31 автоперевірка
 */
// ІНДЕКСАЦІЯ ЕЛЕМЕНТІВ РЯДКА

// Доповни код, присвоївши оголошеним змінним вирази звертання до відповідних елементів 
// або властивостей рядка у змінній course.
// courseTopicLength - довжина рядка.
// firstElement - перший символ рядка.
// lastElement - останній символ рядка.
// const courseTopic = "JavaScript essentials";
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length-1];



/* Завдання 32 автоперевірка
 */
// МЕТОД SLICE()

// Функція getSubstring(string, length) приймає рядок і повертає підрядок від початку і до length символів. 
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

// string - оригінальний рядок
// length - кількість символів з початку рядка для підрядка
// Присвой змінній substring вираз створення підрядка довжиною length символів (від початку) з рядка string.
// function getSubstring(string, length) {
//     const substring = string.slice(string, length); 
//     return substring;
//   }


/* Завдання 33 автоперевірка
 */
// ЗАДАЧА: ФОРМАТУВАННЯ ПОВІДОМЛЕННЯ
// Функція formatMessage(message, maxLength) приймає рядок (параметр message) і форматує його, 
// якщо довжина перевищує значення в параметрі maxLength.
// Доповни код функції таким чином, що якщо довжина рядка:
// не перевищує maxLength, функція повертає його в початковому вигляді.
// більша за maxLength, то функція обрізає рядок до maxLength символів і 
// додає в кінець три крапки "...", після чого повертає скорочену версію.
// function formatMessage(message, maxLength) {
//     let result;
//   if (message.length <= maxLength) {
//     result = `${message}`;
//   }
//   else {
//     result = message.slice(0, maxLength) + "...";
//   }
//   console.log(result);
//     return result;
//   }




/* Завдання 34 автоперевірка
 */
// МЕТОДИ TOLOWERCASE() І TOUPPERCASE()

// Функція normalizeInput(input) приймає рядок (параметр input) і повертає такий самий рядок, 
// але в нижньому регістрі. Присвой змінній normalizedInput вираз створення рядка у нижньому регістрі з параметра input.
// function normalizeInput(input) {
//     const normalizedInput = input.toLowerCase();
//     return normalizedInput;
//   }



/* Завдання 35 автоперевірка
 */
// МЕТОД INCLUDES()

// Функція checkName(fullname, name) приймає два параметри та повертає буль true або false - 
// результат перевірки входження підрядка name у рядок fullname.
// fullname - повне ім'я, що складається з двох слів (імені та прізвища), розділених пробілом.
// name - ім'я для перевірки входження в повне ім'я.
// Присвой змінній result вираз перевірки входження імені (параметр name), 
// у повне ім'я (параметр fullname). Нехай функція чітко розрізняє регістр літер, 
// тобто «Петя» і «петя» - для неї різні імена.
// function checkForName(fullName, name) {
//     const result = fullName.includes (name); 
//      return result;
//    }


/* Завдання 36 автоперевірка
 */
// ЗАДАЧА: ПЕРЕВІРКА СПАМУ

// Функція checkForSpam(message) приймає рядок (параметр message), 
// перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. 
// Слова в рядку параметра message можуть бути у довільному регістрі, наприклад SPAM або sAlE.

// Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
// Якщо в рядку відсутні заборонені слова, функція повертає буль false.

// function checkForSpam(message) {
//     let result;
    
//   const messageToLowerCase = message.toLowerCase();
//   result = messageToLowerCase.includes("spam") || messageToLowerCase.includes("sale");
   
//     return result;
//   }
  
