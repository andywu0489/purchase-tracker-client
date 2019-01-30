'use strict'
const config = require('../config')
const store = require('../store.js')

const signUp = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const changePassword = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/purchases/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'GET'
  })
}

const show = function (id) {
  return $.ajax({
    url: config.apiUrl + '/purchases/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'GET'
  })
}

const update = function (id, data) {
  return $.ajax({
    url: config.apiUrl + '/purchases/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}

const destroy = function (id) {
  return $.ajax({
    url: config.apiUrl + '/purchases/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'DELETE'
  })
}

const create = function (data) {
  return $.ajax({
    url: config.apiUrl + '/purchases/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'POST',
    data
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  index,
  show,
  update,
  destroy,
  create
}
