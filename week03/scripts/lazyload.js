var date = new Date();

//set variables
year = date.getFullYear();
person = 'Joel Campos Porras';
country = 'Costa Rica';
lastModification = 'Last Modification: ' + document.lastModified;

//change HTML
document.getElementById('year').innerText = year;
document.getElementById('name').innerText = person;
document.getElementById('country').innerText = country;
document.getElementById('lastModified').innerText = lastModification;