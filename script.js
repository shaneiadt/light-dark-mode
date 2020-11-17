const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector('#nav');
const toggleIcon = document.querySelector('#toggle-icon');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const textBox = document.querySelector('#text-box');
const currentTheme = localStorage.getItem('data-theme');

function setTheme(theme) {
    localStorage.setItem('data-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    nav.style.backgroundColor = theme === 'dark' ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)";
    textBox.style.backgroundColor = theme === 'dark' ? "rgb(255 255 255 / 50%)" : "rgb(0 0 0 / 50%)";
    toggleIcon.children[0].textContent = theme === 'dark' ? "Dark Mode" : "Light Mode";
    toggleIcon.children[1].classList.remove(theme === 'dark' ? "fa-sun" : "fa-moon");
    toggleIcon.children[1].classList.add(theme === 'dark' ? "fa-moon" : "fa-sun");
    image1.src = `img/undraw_proud_coder_${theme}.svg`;
    image2.src = `img/undraw_feeling_proud_${theme}.svg`;
    image3.src = `img/undraw_conceptual_idea_${theme}.svg`;
}

function switchTheme({ target: { checked } }) {
    setTheme(checked ? 'dark' : 'light');
}

toggleSwitch?.addEventListener("change", switchTheme);

if (currentTheme) {
    setTheme(currentTheme);
    toggleSwitch.checked = currentTheme === 'dark' ? true : false;
}