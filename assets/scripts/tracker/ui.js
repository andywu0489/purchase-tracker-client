'use strict'
const store = require('../store')

const onSignUpSuccess = (responseData) => {
  $('#user-message').text('Successfully signed up!')
}

const onSignUpFailure = () => {
  $('#user-message').text('Error on sign up')
}

const onSignInSuccess = (responseData) => {
  $('#user-message').text('Successfully signed in')
  $('.logged-in').show()
  $('.logged-out').hide()
  $('#content').show()
  store.user = responseData.user
}

const onSignInFailure = () => {
  $('#user-message').text('Error on sign in')
}

const onChangePasswordSuccess = () => {
  $('#user-message').text('Successfully changed password')
  $('#content').html('<p></p>')
}

const onChangePasswordFailure = () => {
  $('#user-message').text('Error on change password')
  $('#content').html('<p></p>')
}

const onSignOutSuccess = () => {
  $('#user-message').text('Successfully signed out')
  $('.logged-in').hide()
  $('.logged-out').show()
  $('.container').hide()
  $('.turn').hide()
  $('.win-text').hide()
  $('#content').hide()
  $('#content').html('<p></p>')
  store.user = null
}

const onSignOutFailure = () => {
  $('#user-message').text('Error on sign out')
}

const onGetPurchasesSuccess = function (response) {
  const purchases = response.purchases
  // clear content div to make room for purchase list
  $('#content').html('')
  // $('#user-message').html('Get request successful')
  // loop through each purchase and add to DOM
  purchases.forEach(function (purchase) {
    const purchaseHTML = (`
      <h4>Item: ${purchase.item}</h4>
      <p>Price: $${purchase.price}</p
      <p>Date of Purchase: ${purchase.date}</p>
      <p>ID: ${purchase.id}</p>
      `)
    $('#content').append(purchaseHTML)
  })
  if ($('#content').is(':empty')) {
    $('#user-message').text('No Purchases Created Yet')
  } else {
    $('#user-message').text('Successfully got purchases')
  }
}

const onGetPurchasesFailure = function () {
  $('#user-message').html('Get request failed, please try again')
}

const onGetPurchaseSuccess = function (response) {
  $('#content').html('')
  $('#user-message').text('Successfully got purchase')
  const purchase = response.purchase
  const purchaseHTML = (`
    <h4>Item: ${purchase.item}</h4>
    <p>Price: $${purchase.price}</p
    <p>Date of Purchase: ${purchase.date}</p>
    <p>ID: ${purchase.id}</p>
    `)
  $('#content').append(purchaseHTML)
  $('#purchase-show input').val('')
}

const onGetPurchaseFailure = function () {
  $('#user-message').html('Show request failed, please try again')
  $('#purchase-show input').val('')
}
const onUpdatePurchaseSuccess = function (response) {
  $('#content').html('')
  $('#user-message').html('You successfully updated the purchase')
  $('#purchase-update input').val('')
}

const onUpdatePurchaseFailure = function (response) {
  $('#user-message').html('Update request failed, please try again')
  $('#purchase-update input').val('')
}

const onDestroyPurchaseSuccess = function (response) {
  $('#content').html('')
  $('#user-message').html('')
  $('#user-message').html('Destroy request successful')
  $('#purchase-destroy input').val('')
}

const onDestroyPurchaseFailure = function () {
  $('#user-message').html('Delete request failed, please try again')
  $('#purchase-destroy input').val('')
}

const onCreatePurchaseSuccess = function () {
  $('#content').html('')
  $('#user-message').html('You created a new purchase!')
  $('#purchases-create input').val('')
}

const onCreatePurchaseFailure = function () {
  $('#user-message').html('Create request failed, please try again')
  $('#purchases-create input').val('')
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInFailure,
  onSignInSuccess,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onGetPurchasesSuccess,
  onGetPurchasesFailure,
  onGetPurchaseSuccess,
  onGetPurchaseFailure,
  onUpdatePurchaseSuccess,
  onUpdatePurchaseFailure,
  onDestroyPurchaseSuccess,
  onDestroyPurchaseFailure,
  onCreatePurchaseSuccess,
  onCreatePurchaseFailure
}
