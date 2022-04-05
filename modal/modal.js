const modalOn = document.getElementById('modal-button')
const modalOff = document.getElementById('modal-close-button')
const modalContainer = document.getElementById('modal-container')


modalOn.addEventListener('click', () => {
    modalContainer.classList.add('modal-on');
});

modalOff.addEventListener('click', () => {
    modalContainer.classList.remove('modal-on');
});


console.log(modalOn)
console.log(modalOff)
console.log(modalContainer)