// Получение ссылок на элементы страницы
const burger = document.querySelector('.burger');
const burgerNav = document.querySelector('.burger-nav');
const header = document.querySelector('header');
const intro = document.querySelector('.intro');
const html = document.querySelector('html');

// Обработчик события для клика на бургер
function onBurgerClick(event) {
  burger.classList.toggle('active');
  burgerNav.classList.toggle('active');
  header.classList.toggle('white');
  intro.classList.toggle('white');
  html.classList.toggle('lock');
}

// Добавление обработчика события на клик по бургеру
burger.addEventListener('click', onBurgerClick);

// Animations for arrows
const arrow = document.querySelector('.arrow');

arrow.addEventListener('mouseenter', () => {
  arrow.style.animationPlayState = 'paused';
});

arrow.addEventListener('mouseleave', () => {
  arrow.style.animationPlayState = 'running';
});

const secondArrow = document.querySelector('.arrow-second');

arrow.addEventListener('mouseenter', () => {
  arrow.style.animationPlayState = 'paused';
});

arrow.addEventListener('mouseleave', () => {
  arrow.style.animationPlayState = 'running';
});

// const toggleButton = document.getElementById('toggle-sidebar');
// const sidebar = document.getElementById('sidebar');

// toggleButton.addEventListener('click', () => {
//   sidebar.classList.toggle('sidebar-open');
//   toggleButton.classList.toggle('active');
// });

const toggleButtons = document.querySelectorAll('.toggle-sidebar');
const sidebars = document.querySelectorAll('.sidebar');

toggleButtons.forEach((toggleButton, index) => {
  toggleButton.addEventListener('click', () => {
    const sidebar = sidebars[index];
    sidebar.classList.toggle('sidebar-open');
    toggleButton.classList.toggle('active');
  });
});
