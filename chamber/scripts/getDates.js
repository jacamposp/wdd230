var date = new Date();

//set variables
year = date.getFullYear();
person = 'Joel Campos Porras';
course = 'WDD 230 Porject';
lastModification = 'Last Modification: ' + document.lastModified;

//change HTML
document.getElementById('year').innerText = year;
document.getElementById('name').innerText = person;
document.getElementById('course').innerText = course;
document.getElementById('lastModified').innerText = lastModification;