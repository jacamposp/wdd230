const rating = document.getElementById("rating");
const rangevalue = document.getElementById("range");
const btnSubmit = document.getElementById("btnSubmit");

function displayRatingValue() {
    rating.innerHTML = rangevalue.value;
}

rangevalue.addEventListener('change', displayRatingValue);
rangevalue.addEventListener('input', displayRatingValue);
displayRatingValue();

const names = document.querySelector("#name");
const email = document.querySelector("#email");
const username1 = document.querySelector("#Username");
const username2 = document.querySelector("#UsernameConfirm");
const message = document.querySelector("#formmessage");

username2.addEventListener("focusout", checkSame);

function checkSame() {
    if (username1.value !== username2.value) {
        message.textContent = "Key Phrases DO NOT MATCH!";
        message.style.display = "block";
        username2.style.backgroundColor = "#aa3333";
        username2.style.color = "#fff";
        username2.focus();
        username2.value = "";
    } else {
        message.style.display = "none";
        username2.style.backgroundColor = "#fff";
        username2.style.color = "#000";
    }
}

btnSubmit.addEventListener('click', function (e) {
    const nameTable = document.querySelector('#nameTable');
    const emailTable = document.querySelector('#emailTable');
    const ratingTable = document.querySelector('#ratingTable');
    const userTable = document.querySelector('#userTable');

    nameTable.textContent = names.value;
    emailTable.textContent = email.value;
    ratingTable.textContent = rangevalue.value;
    userTable.textContent = username1.value;

    const container = document.querySelector('.contact-container');
    const table = document.querySelector('table.not-showing');
    container.classList.add('not-showing');
    table.classList.remove('not-showing');


});