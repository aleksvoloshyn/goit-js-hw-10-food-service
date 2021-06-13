const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyEl = document.querySelector('body');
const switchThemeEl = document.querySelector('#theme-switch-toggle');
const localStorageValue = localStorage.getItem('theme');

onPageLoadFunction();

switchThemeEl.addEventListener('change', onSwitchElClick);

function setDarkTheme() {
  localStorage.setItem('theme', Theme.DARK);
  bodyEl.classList.remove(Theme.LIGHT);
  bodyEl.classList.add(Theme.DARK);
  switchThemeEl.setAttribute('checked', '');
}

function setLightTheme() {
  localStorage.setItem('theme', Theme.LIGHT);
  switchThemeEl.removeAttribute('checked');
  bodyEl.classList.remove(Theme.DARK);
  bodyEl.classList.add(Theme.LIGHT);
}

function onPageLoadFunction() {
  if (localStorageValue === null || localStorageValue === Theme.LIGHT) {
    setLightTheme();
  } else {
    bodyEl.classList.add(localStorageValue);
    switchThemeEl.setAttribute('checked', '');
  }
}

function onSwitchElClick() {
  if (switchThemeEl.getAttribute('checked') === null) {
    setDarkTheme();
  } else {
    setLightTheme();
  }
}
