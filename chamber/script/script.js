// ----- Date Time ------ //
const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const date = new Date();
const dayName = daynames[date.getDay()];
const monthName = months[date.getMonth()];
const year = date.getFullYear();
const fulldate = `${dayName}, ${date.getDate()} ${monthName} ${year}`;

document.getElementById("current_date").textContent = fulldate;
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastupdate').textContent = document.lastModified;

// ----- Navagation ------ //
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

// // ----- Lazy Load ------ //
// let imagesToLoad = document.querySelectorAll("img[data-src]");

// const loadImages = (image) => {
//   image.setAttribute("src", image.getAttribute("data-src"));
//   image.onload = () => {
//     image.removeAttribute("data-src");
//   };
// };

// const imgOptions= {
//   threshold: 0.5,
//   rootMargin: "0px 0px 50px 0px"
// };

// if ("IntersectionObserver" in window) {
//   const observer = new IntersectionObserver((items, observer) => {
//     items.forEach((item) => {
//       if (item.isIntersecting) {
//         loadImages(item.target);
//         observer.unobserve(item.target);
//       }
//     });
//   }, imgOptions);

//   imagesToLoad.forEach((img) => {
//     observer.observe(img);
//   });
// }

// else {
//   imagesToLoad.forEach((img) => {
//     loadImages(img);
//   });
// };
