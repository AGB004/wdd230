
// const cards = document.querySelector(".cards");
// let prophetsList = [];

// const getProphets = async () => {
//   const response = await fetch("https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json");
//   prophetsList = await response;
//   output(prophetsList);
// };

// getProphets();

// const output = (prophets) => {
//   prophets.forEach((prophet) => {
//     // Create elements to add to the document
//     let card = document.createElement("section");
//     let h2 = document.createElement("h2");
//     let portrait = document.createElement("img");
//     let birthInfo = document.createElement("p");

//     // Change the textContent property of the h2 element to contain the prophet's full name
//     h2.innerHTML = `${prophet.name} ${prophet.lastname}`;

//     // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
//     portrait.setAttribute("src", prophet.imageurl);
//     portrait.setAttribute("alt", `Portait of ${prophet.name} ${prophet.lastname} - #${prophet.order} Latter-day President`);
//     portrait.setAttribute("loading", "lazy");

//     // Include Birth place and date
//     birthInfo.innerHTML = `Born ${prophet.birthdate} in ${prophet.birthplace}`;

//     // Add/append the section(card) with the h2 element
//     card.appendChild(h2);
//     card.appendChild(portrait);
//     card.appendChild(birthInfo);

//     // Add/append the existing HTML div with the cards class with the section(card)
//     cards.appendChild(card);
//   });
// };



const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

// async function getProphets() {
//     let response = await fetch(requestURL);
//     let prophets = await response.json();
//     prophets.forEach(displayProphets);
// };

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    });

function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthInfo = document.createElement("p");    

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", `Portait of ${prophet.name} ${prophet.lastname} - #${prophet.order} Latter-day President`);
    portrait.setAttribute("loading", "lazy");

    // Include Birth place and date
    birthInfo.innerHTML = `Born ${prophet.birthdate} in ${prophet.birthplace}`;

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(birthInfo);

    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
}