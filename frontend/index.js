const addBtn = document.getElementById('new-beer-button')
const   beerForm = document.querySelector('.container')
let addBeer = false
const addBeerForm = document.getElementById('add-beer-form')
const BEER_URL = "http://localhost:3000/beers/";
const COUNTRY_URL = "http://localhost:3000/countries/";
const beerCollection = document.querySelector("#beer-collection")



//event listener to show/hide the form and add/remove event listener
addBtn.addEventListener('click', () => {
  addBeer = !addBeer
  if (addBeer) {
    beerForm.style.display = 'block'
    
    addBeerForm.addEventListener("submit", postBeerToServer)
  } else {
    beerForm.style.display = 'none'
    addBeerForm.removeEventListener("submit", postBeerToServer)
  }
})

function makeBeerCard(beer) {
  const div = document.createElement("div");
  div.className = "beer-card";
  div.dataset.id = beer.id;

  const name = document.createElement("h2");
  name.innerText = beer.name;

  const image = document.createElement("img");
  image.className = "beer-image"
  image.src = beer.image;

  const brewery = document.createElement("p");
  brewery.innerText = `Brewery: ${beer.brewery}`;

  const viewButton = document.createElement("button")
  viewButton.innerText = "More Details"

  div.append(name, image, brewery, viewButton)
  beerCollection.append(div); 
}

function showBeers(beersArray) {
  beerCollection.innerHTML = ""
  beersArray.map(beer => {
    makeBeerCard(beer);
  });
}

function init() {
  fetch(BEER_URL)
  .then(data => data.json())
  .then(showBeers);
}

init();
