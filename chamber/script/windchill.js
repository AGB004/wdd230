const temp_celsius = 10;
const windspeed_kmph = 2;

document.getElementById('degrees').textContent = temp_celsius;
document.getElementById('windSpeed').textContent = windspeed_kmph;

const temp_f = temp_celsius * (9/5) + 32;
const windspeed_mph = windspeed_kmph / 1.609;

// temp can't got above 50°F and 10°C / wind speed must be greater than 3mph and 4.83kmph
if (temp_f <= 50 && windspeed_mph >= 3) { 
  const fahrenheit = 35.74 + 0.6215 * temp_f - 35.75 * (windspeed_mph**0.16) + 0.4275 * temp_f * (windspeed_mph**0.16);
  document.getElementById('windChill').textContent = fahrenheit.toFixed(2);
}
// else if (temp_f > 50) {
//   document.getElementById('windChill').textContent = 'Not Cold Enough';
// }
// else if (windspeed_mph < 3) {
//   document.getElementById('windChill').textContent = 'Not Windy Enough';
// }
else {
  document.getElementById('windChill').textContent = 'N/A';
}