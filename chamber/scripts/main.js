const banner = document.querySelector('.banner');

let currentDate = new Date();
let dayOfWeek = currentDate.getDay();

switch(dayOfWeek) {
    case 0:
        banner.classList.add('not-visible');
        break;
    case 1:
        banner.classList.add('visible');
        break;
    case 2:
        banner.classList.add('visible');
        break;
    case 3:
        banner.classList.add('visible');
        break;
    case 4:
        banner.classList.add('not-visible');
        break;
    case 5:
        banner.classList.add('not-visible');
        break;
    case 6:
        banner.classList.add('not-visible');
        break;
}