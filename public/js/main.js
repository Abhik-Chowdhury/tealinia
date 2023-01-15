// navbar toggle
let navBar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navBar.classList.toggle('active');
    searchBox.classList.remove('active');
    cartItem.classList.remove('active');
}
// End navbar toggle

// cart item toggle
let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active')
    navBar.classList.remove('active')
    searchBox.classList.remove('active')
}
//End cart item toggle

// search item box toggle
let searchBox = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchBox.classList.toggle('active')
    navBar.classList.remove('active')
    cartItem.classList.remove('active')
}
// End search item box toggle

window.onscroll = () => {
    navBar.classList.remove('active')
    searchBox.classList.remove('active')
    cartItem.classList.remove('active')
}