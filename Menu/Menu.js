const toggleMenu = () => {
  // 4. toggle the "menu--open" class, from LESS file, on your menu reference
  menu.classList.toggle('menu--open')
}

// 1. Start Here: create a reference to the ".menu" class
const menu = document.querySelector('.menu')

// 2. create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button')

// 3. Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu)
