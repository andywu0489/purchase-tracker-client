const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)

  $('form').trigger('reset')
}

const onSignIn = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)

  $('form').trigger('reset')
}

const onChangePassword = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)

  $('form').trigger('reset')
}

const onSignOut = (event) => {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)

  $('form').trigger('reset')
}

const onGetPurchases = function () {
  api.index()
    .then(ui.onGetPurchasesSuccess)
    .catch(ui.onGetPurchasesFailure)
}

const onGetPurchase = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = data.purchase.id
  api.show(id)
    .then(ui.onGetPurchaseSuccess)
    .catch(ui.onGetPurchaseFailure)
}

const onUpdatePurchase = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = data.purchase.id

  api.update(id, data)
    .then(ui.onUpdatePurchaseSuccess)
    .catch(ui.onUpdatePurchaseFailure)
}

const onDestroyPurchase = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = data.purchase.id
  api.destroy(id)
    .then(ui.onDestroyPurchaseSuccess)
    .catch(ui.onDestroyPurchaseFailure)
}

const onCreatePurchase = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.onCreatePurchaseSuccess)
    .catch(ui.onCreatePurchaseFailure)
}

const onGetPurchasesAfterDelete = function () {
  api.index()
    .then(ui.onGetPurchasesAfterDeleteSuccess)
    .catch(ui.onGetPurchasesFailure)
}

const onDeletePurchase = (event) => {
  event.preventDefault()
  const target = $(event.target).closest('section').data('id')
  api.destroy(target)
    .then(() => onGetPurchasesAfterDelete(event))
    .catch(ui.onDeletePurchaseFailure)
}

const onShowSignIn = function () {
  $('.welcome-message').hide()
  $('#sign-up-holder').hide()
  $('#sign-in-holder').show()
  $('#user-message').html('')
}

const onShowSignUp = function () {
  $('.welcome-message').hide()
  $('#sign-in-holder').hide()
  $('#sign-up-holder').show()
  $('#user-message').html('')
}

const onShowChangePassword = () => {
  $('#change-password').show()
  $('#purchase-show').hide()
  $('#purchase-update').hide()
  $('#purchase-destroy').hide()
  $('#purchases-create').hide()
  $('#content').html('<p></p>')
  $('#user-message').html('')
}

const onShowPurchaseShow = () => {
  $('#change-password').hide()
  $('#purchase-show').show()
  $('#purchase-update').hide()
  $('#purchase-destroy').hide()
  $('#purchases-create').hide()
  $('#content').html('<p></p>')
  $('#user-message').html('')
}

const onShowPurchaseUpdate = () => {
  $('#change-password').hide()
  $('#purchase-show').hide()
  $('#purchase-update').show()
  $('#purchase-destroy').hide()
  $('#purchases-create').hide()
  $('#content').html('<p></p>')
  $('#user-message').html('')
}

const onShowPurchaseDestroy = () => {
  $('#change-password').hide()
  $('#purchase-show').hide()
  $('#purchase-update').hide()
  $('#purchase-destroy').show()
  $('#purchases-create').hide()
  $('#content').html('<p></p>')
  $('#user-message').html('')
}

const onShowPurchaseCreate = () => {
  $('#change-password').hide()
  $('#purchase-show').hide()
  $('#purchase-update').hide()
  $('#purchase-destroy').hide()
  $('#purchases-create').show()
  $('#content').html('<p></p>')
  $('#user-message').html('')
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onGetPurchases,
  onGetPurchase,
  onUpdatePurchase,
  onDestroyPurchase,
  onCreatePurchase,
  onDeletePurchase,
  onGetPurchasesAfterDelete,
  onShowSignIn,
  onShowSignUp,
  onShowChangePassword,
  onShowPurchaseShow,
  onShowPurchaseUpdate,
  onShowPurchaseDestroy,
  onShowPurchaseCreate
}
