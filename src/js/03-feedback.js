import { throttle } from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const localStorageKey = 'feedback-form-state';



form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(localStorageKey)) || {};
const { email, message } = form.elements;
reloadPage();


function onInputData(e) {
    dataForm = { email: email.value, message: message.value };
    localStorage.setItem(localStorageKey, JSON.stringify(dataForm));

};


    
    function onFormSubmit(e) {
    e.preventDefault();
    console.log({ email: email.value, message: message.value });
    if (email.value === '' || message.value === '') {
        return allert('Wypełnij wszystkie pola');
    }
    localStorage.removeItem(localStorageKey);
    e.currentTarget.reset();
    dataForm = {};
        
    
};


