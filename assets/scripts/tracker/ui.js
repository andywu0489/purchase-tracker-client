'use strict'
const store = require('../store')
const showPurchasesTemplate = require('../templates/purchase-listing.handlebars')

const onSignUpSuccess = (responseData) => {
  $('#user-message').text('Successfully Signed Up')
}

const onSignUpFailure = () => {
  $('#user-message').text('Error on Sign Up')
}

const onSignInSuccess = (responseData) => {
  $('#user-message').text('Successfully Signed In')
  $('.logged-in').show()
  $('.logged-out').hide()
  $('#content').show()
  $('#sign-up-button').hide()
  $('#sign-in-button').hide()
  $('#change-password-button').show()
  $('#sign-out').show()
  $('#purchases-index').show(400)
  $('#purchase-show-button').show(500)
  $('#purchase-update-button').show(600)
  $('#purchase-destroy-button').show(700)
  $('#purchase-create-button').show(800)
  $('#purchase-show').hide()
  $('#purchase-update').hide()
  $('#purchase-destroy').hide()
  $('#purchases-create').show()
  $('#change-password').hide()

  store.user = responseData.user
}

const onSignInFailure = () => {
  $('#user-message').text('Error on Sign In')
}

const onChangePasswordSuccess = () => {
  $('#user-message').text('Successfully Changed Password')
  $('#content').html('<p></p>')
}

const onChangePasswordFailure = () => {
  $('#user-message').text('Error on Change Password')
  $('#content').html('<p></p>')
}

const onSignOutSuccess = () => {
  $('#user-message').text('Successfully Signed Out')
  $('.logged-in').hide()
  $('.logged-out').show()
  // $('.container').hide()
  $('#content').hide()
  $('#content').html('<p></p>')
  $('#sign-up-button').show()
  $('#sign-in-button').show()
  $('#sign-in-holder').hide()
  $('#sign-up-holder').hide()
  $('#change-password-button').hide()
  $('#sign-out').hide()
  $('#purchases-index').hide(800)
  $('#purchase-show-button').hide(700)
  $('#purchase-update-button').hide(600)
  $('#purchase-destroy-button').hide(500)
  $('#purchase-create-button').hide(400)
  $('#change-password').hide()
  $('#purchase-show').hide()
  $('#purchase-update').hide()
  $('#purchase-destroy').hide()
  $('#purchases-create').hide()
  $('.welcome-message').show()
  store.user = null
}

let priceArray = []

const onSignOutFailure = () => {
  $('#user-message').text('Error on Sign Out')
}

const onGetPurchasesSuccess = (data) => {
  let totalPrice = 0
  priceArray = []
  const showPurchasesHtml = showPurchasesTemplate({ purchases: data.purchases })

  data.purchases.forEach(i => priceArray.push(Number(i.price)))
  totalPrice = priceArray.reduce(function (prev, curr) {
    return Math.floor(prev * 100) / 100 + Math.floor(curr * 100) / 100
  })

  console.log(totalPrice)
  $('#total').html(`Total Spent: $${totalPrice}`)

  $('#content').html(showPurchasesHtml)
  if ($('#content').is(':empty')) {
    $('#user-message').text('No Purchases Entered')
  } else {
    $('#user-message').text('Successfully Got Purchases')
  }
  $('#change-password').hide()
  $('#purchase-show').hide()
  $('#purchase-update').hide()
  $('#purchase-destroy').hide()
  $('#purchases-create').hide()
}
// const onGetPurchasesSuccess = function (response) {
//   const purchases = response.purchases
//   // clear content div to make room for purchase list
//   $('#content').html('')
//   // $('#user-message').html('Get request successful')
//   // loop through each purchase and add to DOM
//   purchases.forEach(function (purchase) {
//     const purchaseHTML = (`
//       <h4>Item: ${purchase.item}</h4>
//       <p>Price: $${purchase.price}</p
//       <p>Date of Purchase: ${purchase.date}</p>
//       <p>ID: ${purchase.id}</p>
//       `)
//     $('#content').append(purchaseHTML)
//   })
//   if ($('#content').is(':empty')) {
//     $('#user-message').text('No Purchases Created Yet')
//   } else {
//     $('#user-message').text('Successfully got purchases')
//   }
// }

const onGetPurchasesFailure = function () {
  $('#user-message').html('Get Request Failed, Please Try Again')
}

const onGetPurchaseSuccess = function (response) {
  $('#content').html('')
  $('#user-message').text('Successfully Got Purchase')
  const purchase = response.purchase
  const purchaseHTML = (`
    <section data-id=${purchase.id}>
      <div class="listed-items">
        <h6>Item Name: ${purchase.item}</h6>
        <h6>Price: $${purchase.price}</h6>
        <h6>Date: ${purchase.date}</h6>
        <h6>Location: ${purchase.location}</h6>
        <h6>ID: ${purchase.id}</h6>
        <button id='delete'>Delete</button>
      </div>
    </section>
    `)
  $('#content').append(purchaseHTML)
  $('#purchase-show input').val('')
}

const onGetPurchaseFailure = function () {
  $('#user-message').html('Show Request Failed, Please Try Again')
  $('#purchase-show input').val('')
}
const onUpdatePurchaseSuccess = function (response) {
  $('#content').html('')
  $('#user-message').html('Successfully Updated Purchase')
  $('#purchase-update input').val('')
}

const onUpdatePurchaseFailure = function (response) {
  $('#user-message').html('Update Request Failed, Please Try Again')
  $('#purchase-update input').val('')
}

const onDestroyPurchaseSuccess = function (response) {
  $('#content').html('')
  $('#user-message').html('')
  $('#user-message').html('Delete Request Successful')
  $('#purchase-destroy input').val('')
}

const onDestroyPurchaseFailure = function () {
  $('#user-message').html('Delete Request Failed, Please Try Again')
  $('#purchase-destroy input').val('')
}

const onCreatePurchaseSuccess = function () {
  $('#content').html('')
  $('#user-message').html('Successfully Entered New Purchase')
  $('#purchases-create input').val('')
}

const onCreatePurchaseFailure = function () {
  $('#user-message').html('Create Request Failed, Please Try Again')
  $('#purchases-create input').val('')
}

const onDeletePurchaseSuccess = function () {
  $('#content').html('')
  $('#user-message').html('')
  $('#user-message').html('Delete Request Successful')
}

const onDeletePurchaseFailure = function () {
  $('#user-message').html('Delete Request Failed, Please Try Again')
  $('#purchase-destroy input').val('')
}

const onGetPurchasesAfterDeleteSuccess = (data) => {
  let totalPrice = 0
  priceArray = []

  const showPurchasesHtml = showPurchasesTemplate({ purchases: data.purchases })

  data.purchases.forEach(i => priceArray.push(Number(i.price)))
  totalPrice = priceArray.reduce(function (prev, curr) {
    return Math.floor(prev * 100) / 100 + Math.floor(curr * 100) / 100
  })

  console.log(totalPrice)
  $('#total').html(`Total Spent: $${totalPrice}`)

  $('#content').html(showPurchasesHtml)
  $('#user-message').html('Delete Request Successful')
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
  onCreatePurchaseFailure,
  onDeletePurchaseSuccess,
  onDeletePurchaseFailure,
  onGetPurchasesAfterDeleteSuccess
}
