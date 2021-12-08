// require the config file, so we have access to our API's url
const config = require('../config')
// require so you be able to store the place
const store = require('../store')
// this function, will make a request to GET /books (all the books)
const index = function () {
  // make sure to `return` the promise from $.ajax
  return $.ajax({
    // optional: because the default is 'GET'
		method: 'GET',
		// the url to our api + the url path (/books)
		url: config.apiUrl + '/places',
		headers: {
			Authorization: 'Bearer ' + store.user.token
		}

		// Bad practice: We are hard coding the url to our API below.
		// This is bad, because in future units, we will have multiple APIS
		// (a local and deployed API.)
		// url: 'https://library-express-api.herokuapp.com/books'
	})
}

// this function will make a GET request, for a single book
// id - of the book we want to show
const show = function (id) {
  return $.ajax({
		// optional: same method as index
		method: 'GET',
		// use the path to a single book
		url: config.apiUrl + '/places/' + id,
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		}
	})
}

const destroy = function (id) {
  return $.ajax({
		method: 'DELETE',
		// the url to our api + the url path (/books)
		url: config.apiUrl + '/places/' + id,
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		}
	})
}

const update = function (id, formData) {
  return $.ajax({
		method: 'PATCH',
		// the url to our api + the url path (/books)
		url: config.apiUrl + '/places/' + id,
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
		// So it hast the new tittle & author
		data: formData
	})
}

const create = function (formData) {
  console.log('formData:', formData)
  return $.ajax({
    url: config.apiUrl + '/places/',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    // So it hast the new tittle & author
    data: formData
  })
}
// Export the api functions `index` so it can be called in `events.js`

module.exports = {
  index,
  show,
  destroy,
  update,
  create
}
