const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('#list');
var id = 0;

button.addEventListener('click', () => {
    id++;
    if (input.value !== ''){
        const li = document.createElement('li'); 
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function () {
            deleteButton.parentElement.remove();
            input.focus();
            input.value = '';
        })
    }
    else {
        alert('Please enter a text');
        input.focus();
    }
}); 

