const navBtnTagl = document.querySelector('.nav__menu-menu-icon');
const dropdown = document.querySelector('.nav__menu-dropdown');
const dropdownCloes = document.querySelector('.nav__menu-dropdown-btn');
const menuItem = document.querySelectorAll('.nav__menu-item');
const subMenu = document.querySelectorAll('.sub-menu');

const addDropdownBtn = () => dropdown.classList.add("activ-dropdown");
const removeDropdown = () => dropdown.classList.remove('activ-dropdown');


navBtnTagl.addEventListener('click', addDropdownBtn);
dropdownCloes.addEventListener('click', removeDropdown);