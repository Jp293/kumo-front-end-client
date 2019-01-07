'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const kumoApi = require('./api')
const kumoUi = require('./ui')

const onCreateCollection = function (event) {
  event.preventDefault()
  console.log('it did something')

  const data = getFormFields(event.target)

  kumoApi.createEnc(data)
    .then(kumoUi.success)
    .catch(kumoUi.error)
}

const createCollectionMultiPart = function (event) {
  event.preventDefault()
  console.log('it did something in multipart')

  const data = new FormData(event.target)

  kumoApi.createMulti(data)
    .then(kumoUi.success)
    .catch(kumoUi.error)
}

const onShowCollections = () => {
  event.preventDefault()
  kumoApi.showCollection()
    .then(kumoUi.showCollectionSuccess)
    .catch(kumoUi.error)
}

const collectionHandlers = () => {
  $('').on('submit', onCreateCollection)
  $('#upload-form').on('submit', createCollectionMultiPart)
  $('#show-collection').on('click', onShowCollections)
}

module.exports = {
  onCreateCollection,
  createCollectionMultiPart,
  onShowCollections,
  collectionHandlers
}
