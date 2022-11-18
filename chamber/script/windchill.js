// // let temp_c = (temp_f - 32) * (9/5);
// const temp_f = temp_celsius * (9/5) + 32;
// // let kmph = mph * 1.609
// const windspeed_mph = windspeed_kmph / 1.609;


// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#icon_description');
const windSpeed = document.querySelector('#windSpeed');
const windChill = document.querySelector('#windChill');
const humidity = document.querySelector('#humidity');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.73&lon=-111.83&units=imperial&APPID=a4023e8ceca03f465836094459bd1710';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
        console.log(`Response not OK ${await response.text()}`);
    }
  } catch (error) {
      console.log(`Error: ${error.message}`);
  }
}
  
apiFetch();

function capitalize(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
}

function  displayResults(data) {
  // Display temperature
  currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}&deg;F</strong>`;

  // Display weather icon
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = capitalize(data.weather[0].description);
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.innerHTML = desc;

  // Display humidity
  let currentHum = `${data.main.humidity}%`
  humidity.innerHTML = currentHum;

  // Display wind speed
  let temperature = Number(data.main.temp.toFixed(0));
  let speed = Number(data.wind.speed.toFixed(0));
  windSpeed.innerHTML = `${speed} mph`;

  // Display wind chill -->
  // temp can't got above 50°F and 10°C / wind speed must be greater than 3mph and 4.83kmph
  if (temperature <= 50 && speed >= 3) { 
    const fahrenheit = 35.74 + 0.6215 * temperature - 35.75 * (speed ** 0.16) + 0.4275 * temperature * (speed ** 0.16);
    windChill.innerHTML = `${fahrenheit.toFixed(2)}&deg;F`;
  } else {
    windChill.innerHTML = 'N/A';
  }
}