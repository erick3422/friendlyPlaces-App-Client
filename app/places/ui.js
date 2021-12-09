// A function to run when we successfully get all of the books from the API
const onIndexBooksSuccess = function (responseData) {
  // Extract the books from our response data into a variable
  const places = responseData.places
  console.log(responseData)

  // create a string that will store all of our books as html
  let placeHtml = ''

  places.forEach((places) => {
    placeHtml += `
      <div>
          <h4>Name: ${places.name}</h4>
          <p>Address: ${places.address}</p>
          <p>Location: ${places.location}</p>
          <p>Description: ${places.description}</p>
          <p>ID: ${places._id}</p>
          <!-- Add the book's id to the delete button. We can access it with jQuery .data() method later in event,js -->
          <button class="places-destroy-dynamic" data-id=${places._id}>
          Destroy Place
          </button>
        <form class="places-update-dynamic" data-id=${places._id}>
        <input type="text" name="place[name]" placeholder="Name" required>
        <input type="text" name="place[address]" placeholder="Address" required>
        <input type="text" name="place[location]" placeholder="Location" required>
        <input type="text" name="place[description]" placeholder="Description" required>
          <button>
          Update Place
          </button>
          </form>
      </div>
      `
  })

  $('#places-display').html(placeHtml)
}

const onShowPlaceSuccess = function (responseData) {
  const place = responseData.place
  console.log(responseData)

  // create the html to display a single book
  const placeHtml = `
    <div>
      <h4>Name: ${place.name}</h4>
          <p>Address: ${place.address}</p>
          <p>Location: ${place.location}</p>
          <p>Description: ${place.description}</p>
          <p>ID: ${place._id}</p>
    </div>
  `

  // for the div with the id books-display,
  // set its html to be our book's html
  $('#places-display').html(placeHtml)
  $('form').trigger('reset')
}

const onDestroyPlaceSuccess = function () {
  // for the div with the id book-display,
  // set it html to be our  books's html
  $('#places-display').text('The place was successfully deleted')
  $('#places-display').addClass('text-success')

  // After 5 second, run our callback function
  setTimeout(() => {
    $('#places-display').text('')
    $('#places-display').removeClass('text-success')
  }, 5000)
  $('form').trigger('reset')
}

const onUpdatePlaceSuccess = function () {
  $('#places-display').text('Place was updated successfully')
  $('#places-display').addClass('text-success')

  // After 5 second, run our callback function
  setTimeout(() => {
    $('#places-display').text('')
    $('#places-display').removeClass('text-success')
  }, 5000)
  $('form').trigger('reset')
}

const onCreatePlaceSuccess = function () {
  $('#places-display').text('Place was created successfully')
  $('form').trigger('reset')
}
// A function to run anytime any error occurs
const onError = function (err) {
  // if an error occurs, we will log the error (err)
  console.error(err)

  $('#error-message').text('Something went wrong, please try again ')
  $('#error-message').addClass('text-danger')

  // After 5 seconds, run our callback functions
  setTimeout(() => {
    // Remove the message from book-display
    $('#error-message').text('')
    // Remove the red color caused by 'text-danger'
    $('#error-message').removeClass('text-success')
  }, 5000)
}

// export our ui success and failure handler functions
// so they can be imported in `events.js`
module.exports = {
  onIndexBooksSuccess,
  onShowPlaceSuccess,
  onDestroyPlaceSuccess,
  onUpdatePlaceSuccess,
  onCreatePlaceSuccess,
  onError
}
