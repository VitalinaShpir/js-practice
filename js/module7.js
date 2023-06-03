// // Натискання на кнопку "SHOW ME" має виводити значення 
// // з поля введення

// const refs = {
//     output: document.querySelector('.taskTitle'),
//     button: document.querySelector('#alertButton'),
//     inputValue: document.querySelector('#alertInput'),
// }

// refs.button.addEventListener('click', onButtonClick);

// function onButtonClick(){
//     refs.output.textContent = refs.inputValue.value;
//     console.dir(refs.output.textContent)
// }





// {/* <div>
//       <p class="taskTitle">ЗАДАЧА 3</p>
//       <input id="passwordInput" type="text" />
//       <button id="passwordButton">Скрыть</button>
//     </div>
// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду. */}


// // Завдання 2
// // Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// // Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
// // */

// // <!-- ЗАДАЧА 2 -->
// //     <div>
// //       <p class="taskTitle">ЗАДАЧА 2</p>
// //       <button id="swapButton">SWAP ME</button>
// //       <input id="leftSwapInput" type="text" value="???" />
// //       <input id="rightSwapInput" type="text" value="!!!" />
// //     </div>
// /*
// Завдання 4
// Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" - більше на 10 пікселів.
// */
// // <!-- ЗАДАЧА 4 -->
// //     <div>
// //       <p class="taskTitle">ЗАДАЧА 4</p>
// //       <div id="box"></div>
// //       <button id="decrease">Уменьшить</button>
// //       <button id="increase">Увеличить</button>
// //     </div>


// /*
// Завдання 8
// При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
// За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
// інформацією про те, яка кнопка була натиснута скільки разів.
// */
// // <!-- ЗАДАЧА 8 -->
// //     <div>
// //       <p class="taskTitle">ЗАДАЧА 8</p>
// //       <div class="statList">
// //         <button class="calcButton" data-number="5">Button #1</button>
// //         <button class="calcButton" data-number="2">Button #2</button>
// //         <button class="calcButton" data-number="10">Button #3</button>
// //         <button class="calcButton" data-number="50">Button #4</button>
// //         <button class="calcButton" data-number="0">Button #5</button>
// //         <button class="calcButton" data-number="20">Button #6</button>
// //       </div>
// //       <button id="resultButton">Вывести результат</button>
// //       <div id="resultSection"></div>
// //     </div>