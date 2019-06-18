const addBtn = document.getElementById('new-beer-button')
const   beerForm = document.querySelector('.container')
let addBeer = false
const loginBtn = document.getElementById('login-btn')
const signupBtn = document.getElementById('signup-btn')
const loginForm = document.querySelector('.sign-in')
const loginSignupBtns = document.getElementsByClassName('login-signup')
let loginUser = false
const addBeerForm = document.querySelector('.add-beer-form')
const BEER_URL = "http://localhost:3000/beers/";
const COUNTRY_URL = "http://localhost:3000/countries/";
const STYLES_URL = "http://localhost:3000/styles/";
const USERS_URL = "http://localhost:3000/users/";
const beerCollection = document.querySelector("#beer-collection")
let formStyle = document.querySelector('#menu-style-selectors')
let formCountries = document.querySelector('#menu-countries-selectors')

/// event listener to show/hide login field
loginBtn.addEventListener('click', () => {
  loginUser = !loginUser
  if (loginUser) {
    loginForm.style.display = 'block'
    loginBtn.style.display = 'none'
    signupBtn.style.display = 'none'
    
  } else {
    loginForm.style.display = 'none'
  }
})



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

//rendering countries to form
  
 fetch(COUNTRY_URL)
  .then(data => data.json())
  .then(countriesArray)
  
// iterating over countries array and passing into form
function countriesArray(array){
 array.forEach( country => {
    let countryOption = document.createElement('option')
        countryOption.innerText = country.name
        countryOption.dataset.id = country.id
        formCountries.appendChild(countryOption)
      })
}

//rendering styles to form
  
fetch(STYLES_URL)
.then(data => data.json())
.then(stylesArray)

// iterating over styles array and passing into form
function stylesArray(array){
array.forEach( styles => {
  let stylesOption = document.createElement('option')
      stylesOption.innerText = styles.name
      stylesOption.dataset.id = styles.id
      formStyle.appendChild(stylesOption)
    })
}






function postBeerToServer(event){
  event.preventDefault()
  fetch(BEER_URL, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: addBeerForm[0].value,
      image: addBeerForm[1].value,
      brewery: addBeerForm[2].value,
      notes: addBeerForm[3].value,
      abv: addBeerForm[4].value,
      style: addBeerForm[5].value,
      country_id: addBeerForm[6].value
     
    })
  }).then(addBeerForm.reset())
    .then(init)
}

 console.log(addBeerForm[6].options.attributes)


function init() {
  fetch(BEER_URL)
  .then(data => data.json())
  .then(showBeers);
}

init()
