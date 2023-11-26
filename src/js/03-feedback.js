import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const message = document.querySelector('textarea[name = "message]');
const email = document.querySelector('input[name = "email"]');

const localStorageKey = 'feedback-form-state';

form.addEventListener('input',
    throttle(e => {
        const objectSave = { email: email.value, message: message.value };
        localStorage.setItem(localStorageKey, JSON.stringify(objectSave));
    
    }, 500));

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log({ email: email.value, message: message.value });
    form.reset();
    localStorage.removeItem(localStorageKey);
        
    
});

const load = e => {
    try {
        const serializedState = localStorage.getItem(e);
        return serializedState === null ? undefined : JSON.parse(serializedState);
    }
    catch (error) { console.error('Błąd:', error.message); }
};

const storageData = load(localStorageKey);
if (storageData) {
    email.value = storageData.email;
    message.value = storageData.message;
}