const darkModeToggle = document.querySelector('.js-dark-mode-toggle');
const darkModeClass = 'dark-mode';

const handleDarkModeToggle = () => {
  if (!document.body.classList.contains(darkModeClass)) {
    document.body.classList.add(darkModeClass);
    localStorage.setItem(darkModeClass, true);
  } else {
    document.body.classList.remove(darkModeClass);
    localStorage.removeItem(darkModeClass);
  }
}

if (darkModeToggle) {
  darkModeToggle.addEventListener('click', handleDarkModeToggle);
}

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem(darkModeClass)) {
    document.body.classList.add(darkModeClass);
  }
})
