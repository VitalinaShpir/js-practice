// Реалізуйте функціонал пошуку даних по юзеру з API при сабміті форми і виведення їх на сторінку
// https://agify.io/

const formRef = document.querySelector('#form');
const userBox = document.querySelector('.user');
const URL = 'https://api.agify.io/';


function fetchUser (userName){
    return fetch(`${URL}?name=${userName}`).then(response => response.json())
}

function renderMarkup({name, age}){
    const markup = `<h1>${name}</h1>
    <p>${age}</p>`
    userBox.innerHTML = markup;
}

formRef.addEventListener('submit', onSubmitForm)

function onSubmitForm (e){
    e.preventDefault();
   const userName = e.target.elements.user.value;
    fetchUser(userName).then(renderMarkup)
}