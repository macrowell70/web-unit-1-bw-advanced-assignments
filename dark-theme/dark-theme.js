// you need to create DOM selectors to grab the correct HTML elements and update their styles to the opposite theme's css classes when you want to toggle the theme off and on






document.getElementById('mode-button').onclick = function() {
    darkMode()
};

const darkMode = () => {
    const body = document.querySelector('body');
    body.setAttribute('class', 'dark-mode')
    const button = document.getElementById('mode-button')
    button.innerText = 'Light Mode'
    button.onclick = function(){
        lightMode()
    };
};


const lightMode = () => {
    const body = document.querySelector('body');
    body.setAttribute('class', 'light-mode')
    const button = document.getElementById('mode-button')
    button.innerText = 'Dark Mode'
    button.onclick = function(){
        darkMode()
    };
};
