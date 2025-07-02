const button = document.querySelector('button');

button.addEventListener('click', () => {
    const menu = document.querySelector('#menu');
    menu.classList.toggle('show');
});