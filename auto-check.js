
/* Завдання 2 автоперевірка
 */
// let productName = "Droid";
// let pricePerItem = 2000;

// productName = "Repair droid";
// pricePerItem += 1500;

// console.log(pricePerItem); 
// console.log(productName);



/* Завдання 3 автоперевірка
 */
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
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);



/* Завдання 5 автоперевірка
 */
// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;



/* Завдання 6 автоперевірка
 */
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = (pricePerDroid * orderedQuantity) + deliveryFee ;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// console.log(totalPrice);
// console.log(message);



/* Завдання 7 автоперевірка
 */
// function sayHi() {
//     console.log("Hello, this is my first function!")
// }
// sayHi();



/* Завдання 8 автоперевірка
 */
// function add(a, b, c,) {
//     console.log(`Addition result equals ${a + b + c}`);
//   }
  
//   add(15, 27, 10);
//   add(10, 20, 30);
//   add(5, 10, 15);



/* Завдання 9 автоперевірка
 */
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
// function makeMessage (name, price) {
    
//     const message = `You picked ${name}, price per item is ${price} credits.`;

//     return message;
//   };




/* Завдання 11 автоперевірка
 */
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//     const totalPrice = orderedQuantity * pricePerItem;
//     return totalPrice;
//   };




/* Завдання 12 автоперевірка
 */
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
   
//   const makeOrderMessage = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`
   
//     return makeOrderMessage;
//     makeOrderMessage()
//   }


/* Завдання 13 автоперевірка
 */
// function isAdult(age) {

//     const passed = age >= 18;
//     return passed;
//   }



/* Завдання 14 автоперевірка
 */
// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'jqueryismyjam';
    
//     const isMatch = password === SAVED_PASSWORD;
    
//     return isMatch;
//   }




/* Завдання 15 автоперевірка
 */
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
// function isNumberInRange(start, end, number) {
//     const isInRange = number >= start && number <= end; 
  
//     return isInRange;
//   }
  



/* Завдання 22 автоперевірка
 */
// function checkIfCanAccessContent(subType) {
//     const canAccessContent = (subType === "pro" || subType === "vip"); 
  
//     return canAccessContent;
//   }



/* Завдання 23 автоперевірка
 */
// function isNumberNotInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     const isNotInRange = !isInRange; 
  
//     return isNotInRange;
//   }



/* Завдання 24 автоперевірка
 */
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
// function checkStorage(available, ordered) {
//     let message;
  
//   message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
  
//   console.log(message);
 
//     return message;
//   }




/* Завдання 26 автоперевірка
 */
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
    
//   message = password == ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
    
//     return message;
//   }



/* Завдання 27 автоперевірка
 */
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
