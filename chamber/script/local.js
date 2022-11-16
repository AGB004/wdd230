// ----- Last Visit ------ //
const today = Date.now();

const numberDays = document.querySelector("#daysLastVisited");
const numberHours = document.querySelector("#hoursLastVisited");
const numberMins = document.querySelector("#minsLastVisited");
const numberSecs = document.querySelector("#secsLastVisited");

let lastVisit = Number(window.localStorage.getItem('visits-ls'));
localStorage.setItem('visits-ls', today);
let differnece = (today - lastVisit)

let milSec_DaySec = differnece / (24 * 60 * 60 * 1000); // hours in a day * minutes in an hour * seconds in a minute * miliseconds in a second
let milSec_HourSec = ((differnece / (60 * 60 * 1000)) % 24);
let milSec_MinSec = ((differnece / (60 * 1000)) % 60)
let milSec_Sec = ((differnece / 1000) % 60)

numberDays.textContent = milSec_DaySec.toFixed(0);
numberHours.textContent = milSec_HourSec.toFixed(0);
numberMins.textContent = milSec_MinSec.toFixed(0);
numberSecs.textContent = milSec_Sec.toFixed(0);


// // Show days only
// const numberDays = document.querySelector("#lastVisited");

// let numVisits = Number(window.localStorage.getItem('visits-ls'));
// localStorage.setItem('visits-ls', today);
// const milSecDaySec = (today - numVisits)/86400000; // 86400 sec per day converted to milsecs

// if (numberDays) {
//   if (!milSecDaySec) {
//     numberDays.textContent = 0;
//   } else {
//     numberDays.textContent = milSecDaySec.toFixed(0);
//   }
// }