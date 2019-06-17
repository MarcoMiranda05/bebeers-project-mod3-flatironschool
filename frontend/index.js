const addBtn = document.getElementById('new-beer-button')
const   beerForm = document.querySelector('.container')
let addBeer = false
const beerFormSubmit = document.getElementById('beer-form-submit')



//event listener to show/hide the form and add/remove event listener
addBtn.addEventListener('click', () => {
    addBeer = !addBeer
    if (addBeer) {
      beerForm.style.display = 'block'
      beerFormSubmit.addEventListener("submit", postBeerToServer)
    } else {
      beerForm.style.display = 'none'
      beerFormSubmit.removeEventListener("submit", postBeerToServer)
    }
  })