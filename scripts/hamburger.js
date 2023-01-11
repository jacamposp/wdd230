hamburger = document.querySelector('.hamburger');
menuItem = document.querySelectorAll('.menu-item');
menuMode = document.querySelector('.mode');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    menuMode.classList.toggle('is-active');

    //adding is-active class to each menu item
    for (const items of menuItem){
        items.classList.toggle('is-active');
    }
});