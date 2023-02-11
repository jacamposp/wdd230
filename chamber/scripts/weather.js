const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const currentHum = document.querySelector('#current-humidity');
const currentWind = document.querySelector('#current-windSpeed');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Alajuela&units=metric&appid=7c6c73951690e3857261e945334f5ea8';

async function apiFetch() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            //console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    let humidity = data.main.humidity;
    let wind = data.wind.speed;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
    currentHum.textContent = 'Humidity: ' + humidity + '%';
    currentWind.textContent = 'Wind chill: ' + wind;
}
apiFetch();