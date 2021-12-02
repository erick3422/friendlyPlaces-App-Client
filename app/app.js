// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const userEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')
$(() => {
  // Control the signUp functions
  $('#sign-up').on('submit', userEvents.onSignUp)
  // Control the sign-in functions
  $('#sign-in').on('submit', userEvents.onSignIn)
  // Control the sign-out functions
  $('#sign-out').on('submit', userEvents.onSignOut)
})
