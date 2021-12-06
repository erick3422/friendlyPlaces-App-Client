// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const userEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')
const placeEvents = require('./places/events')
$(() => {
  // Control the signUp functions
  $('#sign-up').on('submit', userEvents.onSignUp)
  // Control the sign-in functions
  $('#sign-in').on('submit', userEvents.onSignIn)
  // Control the sign-out functions
  $('#sign-out').on('submit', userEvents.onSignOut)
  // Control for Change Password functions
  $('#change-password').on('submit', userEvents.OnChangePassword)
  // Whenever (on) a click occurs, run the function
  $('#places-index').on('click', placeEvents.onIndexPlaces)
  // On submit event, run the `onShowBook` event handler function
  $('#place-show').on('submit', placeEvents.onShowPlace)
  // On submit event, run the `onDestroyBook` event handler function
  $('#place-to-delete').on('submit', placeEvents.onDestroyPlace)
  // On submit event, run the `onUpdateBook` event handler function
  $('#place-update').on('submit', placeEvents.onUpdatePlace)
  // On submit event, run the `onCreateBook` event handler function
  $('#place-create').on('submit', placeEvents.onCreatePlace)
  // Anytime a button with the id `.books-destroy-dynamic` is clocked,
  // it will run the function
  $('#places-display').on('click', '.places-destroy-dynamic', placeEvents.onDynamicDestroyPlace
  )
  $('#books-display').on('submit', '.places-update-dynamic', placeEvents.onDynamicUpdatePlace
  )
})
