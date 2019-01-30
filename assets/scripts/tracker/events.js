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
  // make API call for all the purchases
  api.index()
  // when API call is successful
    .then(ui.onGetPurchasesSuccess)
  // when API call fails
    .catch(ui.onGetPurchasesFailure)
}

const onGetPurchase = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = data.purchase.id
  // make API call for all the purchases
  api.show(id)
  // when API call is successful
    .then(ui.onGetPurchaseSuccess)
    // when API call fails
    .catch(ui.onGetPurchaseFailure)
}

const onUpdatePurchase = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = data.purchase.id

  api.update(id, data)
  // when API call is successful
    .then(ui.onUpdatePurchaseSuccess)
  // when API call fails
    .catch(ui.onUpdatePurchaseFailure)
}

const onDestroyPurchase = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = data.purchase.id
  // make API call for all the purchases
  api.destroy(id)
  // when API call is successful
    .then(ui.onDestroyPurchaseSuccess)
    // when API call fails
    .catch(ui.onDestroyPurchaseFailure)
}

const onCreatePurchase = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.onCreatePurchaseSuccess)
    .catch(ui.onCreatePurchaseFailure)
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
  onCreatePurchase
}
