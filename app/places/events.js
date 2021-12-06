// Import the api function from `api.js`
const api = require('./api')
// Import the ui success and failure handler functions
const ui = require('./ui')
// Import the getFormFields function, to get data out of our form
const getFormFields = require('../../lib/get-form-fields')

// This function is called whenever the 'book-index' button is clicked
const onIndexPlaces = () => {
  // Make our index request GET / books
  api.index()
  // If our HTTP request to get the books was successful, then run console.log
    .then(ui.onIndexPlacesSuccess)
  // Otherwise if an error ocurred, log it as error message
    .catch(ui.onError)
}

const onShowPlace = (event) => {
  // Prevent the default action of the form refreshing the page is submitted
  event.preventDefault()
  // Is whatever submitted event, we are storing it in the user friendly variable `form`
  const form = event.target
  // Get the data out of our `form`
  const formData = getFormFields(form)
  console.log(formData)

  // extract the id from our form's data
  const id = formData.place.id

  // Make an HTTP request, to show a single book based on its id
  api.show(id)
  // If getting a single book was successfully, show it on the page
    .then(ui.onShowPlaceSuccess)
  // Otherwise, show an error message
    .catch(ui.onError)
}

const onDestroyPlace = (event) => {
  // Prevent the default action of the form refreshing the page is submitted
  event.preventDefault()
  // Is whatever submitted event, we are storing it in the user friendly variable `form
  const form = event.target
  // Get the data out of our `form`
  const formData = getFormFields(form)
  console.log(formData)

  // extract the id from our form's data
  const id = formData.place.id

  // Make an HTTP request, to delete a single book based on its id
  api.destroy(id)
  // If getting a delete book was successfully, show it on the page
    .then(ui.onDestroyPlaceSuccess)
  // Otherwise, show an error message
    .catch(ui.onError)
}

const onUpdatePlace = (event) => {
  event.preventDefault()
  // Is whatever submitted event, we are storing it in the user friendly variable `form`
  const form = event.target
  // Get the data out of our `form`
  const formData = getFormFields(form)
  console.log(formData)

  // extract the id from our form's data
  const id = formData.place.id

  // Make an HTTP request, to show a single book based on its id
  api.update(id, formData)
  // If getting a single book was successfully, show it on the page
    .then(ui.onUpdatePlaceSuccess)
  // Otherwise, show an error message
    .catch(ui.onError)
}

const onCreatePlace = (event) => {
  event.preventDefault()
  // Is whatever submitted event, we are storing it in the user friendly variable `form`
  const form = event.target
  // Get the data out of our `form`
  const formData = getFormFields(form)
  console.log(formData)

  // Make an HTTP request, to create a single place
  api.create(formData)
  // If creating a single book was successfully, show it on the page
    .then(ui.onCreatePlaceSuccess)
  // Otherwise, show an error message
    .catch(ui.onError)
}

const onDynamicDestroyPlace = (event) => {
  // select the button and access its data based on its id
  const id = $(event.target).data('id')

  // Make an HTTP request, to delete a single book based on its id
  api.destroy(id)
  // If getting a delete book was successfully, show it on the page
    .then(ui.onDestroyPlaceSuccess)
  // Otherwise, show an error message
    .catch(ui.onError)
}

const onDynamicUpdatePlace = (event) => {
  event.preventDefault()
  // Is whatever submitted event, we are storing it in the user friendly variable `form`
  const form = event.target
  // Get the data out of our `form`
  const formData = getFormFields(form)
  console.log(formData)

  // extract the id from our form's data
  const id = $(event.target).data('id')

  // Make an HTTP request, to show a single book based on its id
  api.update(id, formData)
  // If getting a single book was successfully, show it on the page
    .then(ui.onUpdatePlaceSuccess)
  // Otherwise, show an error message
    .catch(ui.onError)
}

module.exports = {
  // since the name and the value are the same, we can use  the shorthand syntax
  onIndexPlaces,
  onShowPlace,
  onDestroyPlace,
  onUpdatePlace,
  onCreatePlace,
  onDynamicDestroyPlace,
  onDynamicUpdatePlace
}
