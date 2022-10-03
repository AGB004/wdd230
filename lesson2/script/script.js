// let lastupdate = document.querySelector("#lastupdate");

// const options = {weekday: "long",day: "numeric",month: "long",year: "numeric"};

// document.getElementById("lastupdate").textContent = new Date().toLocaleDateString("en-US, options");
// lastupdate.textContent = new Date().toLocaleDateString("en-US, options");

// Long hand method ... building day and month names from built-in date methods.

// const daynames = [
// 	"Sunday",
// 	"Monday",
// 	"Tuesday",
// 	"Wednesday",
// 	"Thursday",
// 	"Friday",
// 	"Saturday"
// ];
// const months = [
// 	"January",
// 	"February",
// 	"March",
// 	"April",
// 	"May",
// 	"June",
// 	"July",
// 	"August",
// 	"September",
// 	"October",
// 	"November",
// 	"December"
// ];
// const d = new Date();
// const dayName = daynames[d.getDay()];
// const monthName = months[d.getMonth()];
// const year = d.getFullYear();
// const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
// lastupdate.textContent = fulldate;

document.getElementById('lastupdate').textContent = document.lastModified