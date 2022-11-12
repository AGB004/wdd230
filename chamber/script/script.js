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

fetch('chamber/json/data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinesses);
  });

function displayBusinesses(business) {
  // Create elements to add to the document
  let card = document.createElement('div');
  let image = document.createElement('img');
  let h2 = document.createElement('h2');
  let address = document.createElement('p');
  let phoneNumber = document.createElement('p');
  let website = document.createElement('a');

  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = business.name;
  address.textContent = `Address: ${business.address}`;
  phoneNumber.textContent = `Contact: ${business.phoneNumber}`;
  website.textContent = business.webURL;
  website.href = business.webURL;


  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  image.setAttribute('src', business.image);
  image.setAttribute('alt', `${business.name}`);
  image.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(image);
  card.appendChild(address);
  card.appendChild(phoneNumber);
  card.appendChild(website);

  // Add/append the existing HTML div with the cards class with the section(card)
  const grid = document.querySelector('.grid');
  grid.appendChild(card);
}

const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const arrange = document.querySelector('#businesses');

gridButton.addEventListener('click', () => {
  arrange.classList.add('grid');
  arrange.classList.remove('list');
});

listButton.addEventListener('click', () => {
  display.classList.add('list');
  display.classList.remove('grid');
});