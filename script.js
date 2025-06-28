const button = document.querySelector('button');

button.addEventListener('click', (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
});