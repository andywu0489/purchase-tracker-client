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
  $('#sign-out').on('click', events.onSignOut)
  $('#purchases-index').on('click', events.onGetPurchases)
  $('#purchase-show').on('submit', events.onGetPurchase)
  $('#purchase-update').on('submit', events.onUpdatePurchase)
  $('#purchase-destroy').on('submit', events.onDestroyPurchase)
  $('#purchases-create').on('submit', events.onCreatePurchase)
  $('#content').on('click', '#delete', events.onDeletePurchase)
  $('#sign-in-button').on('click', events.onShowSignIn)
  $('#sign-up-button').on('click', events.onShowSignUp)
  $('#change-password-button').on('click', events.onShowChangePassword)
  $('#purchase-show-button').on('click', events.onShowPurchaseShow)
  $('#purchase-update-button').on('click', events.onShowPurchaseUpdate)
  $('#purchase-destroy-button').on('click', events.onShowPurchaseDestroy)
  $('#purchase-create-button').on('click', events.onShowPurchaseCreate)
})
