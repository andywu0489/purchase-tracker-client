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

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInFailure,
  onSignInSuccess,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
