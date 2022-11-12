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
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;

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

// ----- Chamber Meeting ------ //
const today = d.getDay();

if (today < 1 || today > 2) {
  const banner = document.getElementById('greet');
  banner.remove();
}

// ----- Lazy Load ------ //
let imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

const imgOptions= {
  threshold: 0.5,
  rootMargin: "0px 0px 50px 0px"
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);

  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
}

else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
};

// ----- DIRECTORY ------ //
const cards = document.querySelector('.cards');

fetch('json/data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinesses);
  });

function displayBusinesses(business) {
  let card = document.createElement('section');
  let image = document.createElement('img');
  let h2 = document.createElement('h2');
  let address = document.createElement('p');
  let phoneNumber = document.createElement('p');
  let website = document.createElement('a');

  h2.textContent = business.name;
  address.textContent = `Address: ${business.address}`;
  phoneNumber.textContent = `Contact: ${business.phoneNumber}`;
  website.textContent = business.webURL;
  website.href = business.webURL;

  image.setAttribute('src', business.image);
  image.setAttribute('alt', `${business.name}`);
  image.setAttribute('class', "directoryImg");
  image.setAttribute('loading', 'lazy');

  card.appendChild(h2);
  card.appendChild(image);
  card.appendChild(address);
  card.appendChild(phoneNumber);
  card.appendChild(website);

  const grid = document.querySelector('.directoryGrid');
  if (grid) grid.appendChild(card);
}

// async function getDirectory() {
//   const response = await fetch("./json/data.json");

//   if (response.ok) {
//     let data = await response.json();
//     console.log(data);
//     displayDirectory(data);
//   }
// }

const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const arrange = document.querySelector('#businesses');

if (gridButton) {
  gridButton.addEventListener('click', () => {
    arrange.classList.add('directoryGrid');
    arrange.classList.remove('directoryList');
  });
}

if (listButton) {
  listButton.addEventListener('click', () => {
    arrange.classList.add('directoryList');
    arrange.classList.remove('directoryGrid');
  });
}