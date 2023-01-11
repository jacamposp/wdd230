dark = document.querySelector('.dark');
light = document.querySelector('.light');
body = document.querySelector('body');
title = document.querySelector('.title-center h2');
titleBackground = document.querySelector('.title-center');
list = document.querySelectorAll('.card li');

dark.addEventListener('click', () => {
    body.style.background = 'var(--black)';
    title.style.background = 'var(--black)';
    title.style.color = 'var(--white)';
    light.classList.toggle('is-active');
    dark.classList.toggle('is-active');

    for (const item of list) {
        item.style.color = 'var(--white)';
    }
})

light.addEventListener('click', () => {
    body.style.background = 'var(--white)';
    title.style.background = 'var(--white)';
    title.style.color = 'var(--black)';
    light.classList.toggle('is-active');
    dark.classList.toggle('is-active');

    for (const item of list) {
        item.style.color = 'var(--black)';
    }
})