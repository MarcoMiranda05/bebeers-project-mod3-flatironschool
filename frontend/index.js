///// GLOBAL VARIABLES

const addBtn = document.getElementById('new-beer-button')
const   beerForm = document.querySelector('.container')
let addBeer = false
const loginBtn = document.getElementById('login-btn')
const signupBtn = document.getElementById('signup-btn')
const loginForm = document.querySelector('.sign-in')
const loginSignupBtns = document.getElementsByClassName('login-signup')
let loginUser = false
let signupUser = false
const signupForm = document.querySelector('.sign-up')
const addBeerForm = document.querySelector('.add-beer-form')
const BEER_URL = "http://localhost:3000/beers/";
const COUNTRY_URL = "http://localhost:3000/countries";
const STYLES_URL = "http://localhost:3000/styles";
const USERS_URL = "http://localhost:3000/users";
const beerCollection = document.querySelector("#beer-collection")
let formStyle = document.querySelector('#menu-style-selectors')
let formCountries = document.querySelector('#menu-countries-selectors')
let currentUser = null
const search = document.querySelector('.search')



//// welcome and logout
const welcome = document.getElementById('welcome')
const logout = document.getElementById('logout-btn')

function greeting() {
  currentUser === !null
  if (currentUser) {
  welcome.style.display = "block"
  welcome.innerText = `Welcome, ${currentUser.username}!`
  logout.style.display = "block"
  logout.addEventListener('click', () => {
    currentUser = null
    welcome.style.display = "none"
    logout.style.display = "none"
    loginBtn.style.display = 'block'
    signupBtn.style.display = 'block'
  })
  loginForm.style.display = 'none'
  loginBtn.style.display = 'none'
  signupBtn.style.display = 'none'
  signupForm.style.display = 'none'
} else {
  welcome.style.display = "none"
  logout.style.display = "none"
}
}
// welcome.innerText = `Welcome, ${currentUser.username}!`


/// event listener to show/hide login field
loginBtn.addEventListener('click', () => {
  loginUser = !loginUser
  if (loginUser) {
    loginForm.style.display = 'block'
    loginBtn.style.display = 'none'
    signupBtn.style.display = 'block'
    signupForm.style.display = 'none'
    loginForm.addEventListener('submit', e => {
      e.preventDefault()
      const username = loginForm.username.value
      getUser(username)
        .then(data => {
          if (data.error) {
            alert(data.error)
          } else {
            currentUser = data
          }
        }).then(greeting)
    })
  } else {
    loginForm.style.display = 'none'

  }
})

signupBtn.addEventListener('click', () => {
  signupUser = !signupUser
  if (signupUser) {
    signupForm.style.display = 'block'
    signupBtn.style.display = 'none'
    loginBtn.style.display = 'block'
    loginForm.style.display = 'none'
    signupForm.addEventListener('submit', e => { 
      e.preventDefault()
      postUserToServer(e)
      .then(data => {
        if (data.error) {
          alert(data.error)
        } else {
          currentUser = data
        }
      }).then(greeting)
    
    })
        } else {
          signupForm.style.display = 'none'
        }
      }
    )



//event listener to show/hide the form and add/remove event listener
addBtn.addEventListener('click', () => {
  addBeer = !addBeer
  if (addBeer) {
    beerForm.style.display = 'block'
    
    addBeerForm.addEventListener("submit", postBeer)
  } else {
    beerForm.style.display = 'none'
    addBeerForm.removeEventListener("submit", postBeer)
  }
})


// // current user function
function getUser(username) {
  return fetch(USERS_URL + `/${username}`)
    .then(data => data.json())
}

function postUserToServer(event){
  event.preventDefault()
  return fetch(USERS_URL, {
    method:"POST",
    headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
      body: JSON.stringify({
      username: signupForm.username.value
    })
  }).then(data => data.json())
}


// beer card
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
        viewButton.className = "beer-button"
  viewButton.innerText = "More Details"

  const starsOuter = document.createElement('div')
        starsOuter.className = 'stars-outer'

  const starsInner = document.createElement('div')
        starsInner.className = 'stars-inner'

  starsOuter.append(starsInner)
  div.append(name, image, brewery, starsOuter, viewButton)
  beerCollection.append(div); 

 viewButton.addEventListener('click', () => renderBeer(beer)) 
}




// render all beers
function showBeers(beersArray) {
  beerCollection.innerHTML = ""
  beersArray.map(beer => {
    makeBeerCard(beer);
  });
}



// render one beer information
function renderBeer(beer){
  

  const beerRenderDiv = document.querySelector('#render-beer')
        beerRenderDiv.innerHTML = ""

  let beerDiv = document.createElement('div')
      beerDiv.className = "beer-render-div"

  let beerImageDiv = document.createElement('div')
      
  let beerImg = document.createElement('img')
      beerImg.src = beer.image
      beerImg.className = "beer-image-single-render"
      beerImageDiv.append(beerImg)

  let beerName = document.createElement('h2')
      beerName.innerText = beer.name

  let beerNotes = document.createElement('p')
      beerNotes.innerText = `Notes: ${beer.notes}`

  let beerCountry = document.createElement('p')
      beerCountry.innerText = `${beer.brewery} - ${beer.country.name}`

  let beerStyle = document.createElement('p')
      beerStyle.innerText = `Style: ${beer.style.name}`

   let beerBrewery = document.createElement('p')
       beerBrewery.innerText = `Brewery: ${beer.brewery}`

  beerDiv.append(beerImageDiv, beerName, beerCountry, beerBrewery, beerStyle, beerNotes )
  beerRenderDiv.append(beerDiv)
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
        countryOption.value = country.id
        formCountries.appendChild(countryOption)
      })
}

//rendering styles to form
  
fetch(STYLES_URL)
.then(data => data.json())
.then(stylesArray)

// iterating over styles array and passing into form
function stylesArray(array){
array.forEach( style => {
  let stylesOption = document.createElement('option')
      stylesOption.innerText = style.name
      stylesOption.value = style.id
      formStyle.appendChild(stylesOption)
    })
}

// create a beer

function postBeer(e) {
  // debugger
  e.preventDefault();
  const target = e.target
  const beer = {
    name: addBeerForm[0].value,
    image: addBeerForm[1].value,
    brewery: addBeerForm[2].value,
    notes: addBeerForm[3].value,
    abv: addBeerForm[4].value,
    style_id: addBeerForm[5].value,
    country_id: addBeerForm[6].value
  };


  postBeerToServer(beer)

    .then(beerData => beerData.json())
    // .then(data => {
    //   console.log(data);
    //   return data;
    // })
    .then(beer => {
      makeBeerCard(beer)
      addBeerForm.reset()
    });
  
}



// connections to the server
function postBeerToServer(beer) {
  return fetch(BEER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(beer)
  });
}


const searchBar = document.forms['search-bar-form'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
let term = e.target.value.toLowerCase();
let beers = document.getElementsByClassName('beer-card');
Array.from(beers).forEach(function(beer){
    let name = beer.firstElementChild.textContent;
    if(name.toLowerCase().indexOf(term)!= -1) {
      beer.style.display = 'inline-block';
    } else {
      beer.style.display = 'none';
    }
  })
})

// initialize page

function init() {
  fetch(BEER_URL)
  .then(data => data.json())
  .then(showBeers);
}

init()
