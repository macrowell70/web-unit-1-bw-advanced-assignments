// you need to create DOM selectors to grab the correct HTML elements and update their styles to the opposite theme's css classes when you want to toggle the theme off and on




// const lightMode = () => {
//     const background = document.querySelector('html');
//     background.style.color = 'black'
//     background.style.backgroundColor = 'white'
// };


document.getElementById('mode-button').onclick = function() {
    darkMode()
};

const darkMode = () => {
    const background = document.querySelector('html');
    background.style.color = 'white'
    background.style.backgroundColor = 'black'
    const button = document.getElementById('mode-button')
    button.innerText = 'Light Mode'
    button.onclick = function(){
        lightMode()
    };
};


const lightMode = () => {
    const background = document.querySelector('html');
    background.style.color = 'black'
    background.style.backgroundColor = 'white'
    const button = document.getElementById('mode-button')
    button.innerText = 'Dark Mode'
    button.onclick = function(){
        darkMode()
    };
};
