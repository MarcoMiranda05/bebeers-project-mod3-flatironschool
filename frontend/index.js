const addBtn = document.getElementById('new-beer-button')
const   beerForm = document.querySelector('.container')
let addBeer = false
const addBeerForm = document.getElementById('add-beer-form')



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