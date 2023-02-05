const card = document.querySelector('.card-container');

async function getData() {
    const response = await fetch('../wdd230/activities.json');
    const data = await response.json();
    //console.log(data);
    displayData(data);
}

const displayData = (data) => {
    let title = document.createElement('h3');
    let ul = document.createElement('ul');
    let week = Object.keys(data);
    
    title.textContent = 'Learning Activities';
   
    card.appendChild(title);
    card.appendChild(ul);

    for(let key in data){
        count = 0;

        let li = document.createElement('li');
        li.textContent = key;
        
        for(let element in data[key]){
            let a = document.createElement('a');
            a.setAttribute('href', data[key][element].url);
            a.textContent = `${data[key][element].text} | ` ;

            li.appendChild(a);
        }
        ul.appendChild(li);
        count ++;
    }
}
getData();