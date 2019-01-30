'use strict'
const events = require('./tracker/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
  $('#purchases-index').on('click', events.onGetPurchases)
  $('#purchase-show').on('submit', events.onGetPurchase)
  $('#purchase-update').on('submit', events.onUpdatePurchase)
  $('#purchase-destroy').on('submit', events.onDestroyPurchase)
  $('#purchases-create').on('submit', events.onCreatePurchase)
})
