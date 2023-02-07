const mainContainer = document.querySelector('.members-container');

async function getCompany() {
    const response = await fetch('../chamber/data/members.json');
    const data = await response.json();
    //console.table(data.companies)

    displayData(data.companies)

}

const displayData = (data) => {
    //console.log(data)
    data.forEach(company => {
        //creating elements
        let cardContainer = document.createElement('div');
        let image = document.createElement('img');
        let category = document.createElement('div');
        let heading = document.createElement('div');
    
        //adding classes
        cardContainer.classList.add('card');
        image.classList.add('card-image');
        category.classList.add('category');
        heading.classList.add('heading');
        
        //Adding values
        category.textContent = company.business
        heading.textContent = company.name;
        image.setAttribute('src', company.image);
        image.setAttribute('alt', company.name);

        //append elements
        cardContainer.appendChild(image);
        cardContainer.appendChild(category);
        cardContainer.appendChild(heading);

        mainContainer.appendChild(cardContainer);
    });

}
getCompany();