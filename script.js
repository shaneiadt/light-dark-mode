const toggleSwitch = document.querySelector('input[type="checkbox"]');

function switchTheme({ target: { checked } }) {
    document.documentElement.setAttribute('data-theme', checked ? 'dark' : 'light');
}

toggleSwitch?.addEventListener("change", switchTheme);