hamburger = document.querySelector('.hamburger');
menu = document.querySelectorAll('.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');

    //adding is-active class to each menu item
    for (const items of menu){
        items.classList.toggle('is-active');
    }
});