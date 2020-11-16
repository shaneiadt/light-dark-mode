const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector('#nav');
const toggleIcon = document.querySelector('#toggle-icon');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const textBox = document.querySelector('#text-box');

function switchTheme({ target: { checked } }) {
    document.documentElement.setAttribute('data-theme', checked ? 'dark' : 'light');
    nav.style.backgroundColor = checked ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)";
    textBox.style.backgroundColor = checked ? "rgb(255 255 255 / 50%)" : "rgb(0 0 0 / 50%)";
    toggleIcon.children[0].textContent = checked ? "Dark Mode" : "Light Mode";
    toggleIcon.children[1].classList.remove(checked ? "fa-sun" : "fa-moon");
    toggleIcon.children[1].classList.add(checked ? "fa-moon" : "fa-sun");
    image1.src = `img/undraw_proud_coder_${checked ? 'dark' : 'light'}.svg`;
    image2.src = `img/undraw_feeling_proud_${checked ? 'dark' : 'light'}.svg`;
    image3.src = `img/undraw_conceptual_idea_${checked ? 'dark' : 'light'}.svg`;
}

toggleSwitch?.addEventListener("change", switchTheme);