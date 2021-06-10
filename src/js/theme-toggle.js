const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeOnLoad = {};

const bodyEl = document.querySelector('body');
const switchThemeEl = document.querySelector('#theme-switch-toggle');
console.log(switchThemeEl);

function onCheckBoxClick() {
  bodyEl.classList.add('dark-theme');
}

switchThemeEl.addEventListener('click', onCheckBoxClick);
