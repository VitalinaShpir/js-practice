// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// (apartment.price = 5000),
//   (apartment.rating = 4.7),
//   (apartment.owner.name = "Henry Sibola");
// apartment.tags.push("trusted");


// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name: name,
//   price: price,
//   image: image,
//   tags: tags,
//   // Change code below this line
//   // Change code above this line
// };
// console.log(product.name);
// console.log(product.price);
// console.log(product.image);
// console.log(product.tags);


// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
  
//   for (const key in book) {
//     // Ключ
//     console.log(key);
//     // Значення властивості з таким ключем
//     console.log(book[key]);
//   }


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
// for (let product of products){
//   if (productName === product.name) {
//     return product.price
//   }
//      return null
// }


//   // Change code above this line
 
// }

// const bookShelf = {
//     // Change code below this line
//     books: ["The last kingdom", "The guardian of dreams"],
//     getBooks() {
//       return "Returning all books";
//     },
//     addBook(bookName) {
//       this.books.push(bookName);
//       return `Adding book ${bookName}`;
//     },
//     // Change code above this line
  
    
//     removeBook(bookName) {
//       let index = this.books.indexOf(bookName);
//       if (index !== -1) {
//         this.books.splice(index, 1);
//       }
//       return  `Deleting book ${bookName}.`;
//     },
    
//     updateBook(oldName, newName) {
//       let index = this.books.indexOf(oldName);
//       if (index !== -1) {
//         this.books[index] = newName;
//       }
//       return `Updating book ${oldName} to ${newName}.`;
//     }
//   };

// potions= [
//   { name: "Speed potion", price: 460 },
//   { name: "Dragon breath", price: 780 },
//   { name: "Stone skin", price: 520 },
// ]
// const potionTest = potions.map(potion => potion.name)
// console.log(potionTest)

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     const potionNames = this.potions.map(potion => potion.name)
//     if (potionNames.includes(newPotion.name)) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.findIndex(potion => potion.name === potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.findIndex(potion => potion.name === oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions[potionIndex].name = newName;
//   },
//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions())
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
// console.log(atTheOldToad.potions)
// atTheOldToad.removePotion("Speed potion")
// console.log(atTheOldToad.potions)
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }))


// Создайте переменную str и присвойте ей значение 'abcde'.
//  Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'.


// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
//   // Change code below this line
  
//   const titles = books.map(book => book.name);
//   console.log(titles);




//Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`