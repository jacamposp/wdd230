const mainContainer = document.querySelector('.company-container');
const urls = 'https://jacamposp.github.io/wdd230/chamber/data/members.json';

async function getCompany() {
    try {
        const response = await fetch('../chamber/data/members.json');
        if (response.ok) {
            const data = await response.json();
            //console.log(data); // testing only
            displayData(data.companies); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function random_item(items) {

    return items[Math.floor(Math.random() * items.length)];

}
const displayData = (data) => {

    //console.log(data)
    let newData = [];
    data.forEach(company => {
        if (company.level == 'Gold' || company.level == 'Silver') {
            newData.push(company);
        }
    });
    //console.log(random_item(newData));

    //console.log(newData);
    for (let i = 0; i < 3; i++) {
        let company = random_item(newData);
        //creating elements
        let cardContainer = document.createElement('div');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let a1 = document.createElement('a');
        let a2 = document.createElement('a');
        let a3 = document.createElement('a');

        //adding classes
        cardContainer.classList.add('company');
        cardContainer.classList.add('card');

        //adding values and attributes
        h3.textContent = company.name;
        p.textContent = company.business;
        a1.textContent = 'contact@' + company.name + '.com';
        a2.textContent = company.phone;
        a3.textContent = company.website;

        a1.setAttribute('href', 'mailto:contact@' + company.name + '.com');
        a2.setAttribute('href', 'tel:'+company.phone);
        a3.setAttribute('href', 'https://www.'+company.website);
        a3.setAttribute('target', '_blank');

        //append elements
        cardContainer.appendChild(h3);
        cardContainer.appendChild(p);
        cardContainer.appendChild(a1);
        cardContainer.appendChild(a2);
        cardContainer.appendChild(a3);

        mainContainer.appendChild(cardContainer);

    }

}
getCompany();