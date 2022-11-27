const cards = document.querySelector('.cards');

fetch('json/data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    let memberFilter = businesses.filter(obj=> obj.membership == "Gold" || obj.membership == "Silver");
    randomSpotLight = getRandom(memberFilter, 3);
    randomSpotLight.forEach(displaySpotlight);
  });

  function getRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

function displaySpotlight(business) {
  let card = document.createElement('div');
  let image = document.createElement('img');
  let h2 = document.createElement('h2');
  let address = document.createElement('p');
  let phoneNumber = document.createElement('p');
  let website = document.createElement('a');
  
  card.setAttribute("class", "spotlight_div")
  h2.textContent = business.name;
  address.textContent = `Address: ${business.address}`;
  phoneNumber.textContent = `Contact: ${business.phoneNumber}`;
  website.textContent = business.webURL;
  website.href = business.webURL;

  image.setAttribute('src', business.image);
  image.setAttribute('alt', `Image of ${business.name}`);
  image.setAttribute('loading', 'lazy');
  image.setAttribute('width', '150px');
  image.setAttribute('height', 'auto');

  card.appendChild(h2);
  card.appendChild(image);
  card.appendChild(address);
  card.appendChild(phoneNumber);
  card.appendChild(website);

  const spotlight = document.querySelector('.spotlight');
  spotlight.appendChild(card);

  
}