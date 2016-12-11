'use strict'
require('isomorphic-fetch')
const isURL = require('is-url')
const promise2Task = require('promise-to-task')

module.exports = (url) => {
  if (!isURL(url)) {
    throw new TypeError(`Expected an URL.`)
  }
  const fetchResponse = fetch(url)
    .then(response => {
	  const contentType = response.headers.get("content-type");
	  let type;
      if (!!~contentType.indexOf('json')) {
        return response.json()
      }
      else if (!!~contentType.indexOf('text')) {
        type = 'text'
        return response.text()
      }
      else if (!!~contentType.indexOf('blob')) {
        type = 'blob'
        return response.blob()
      }
      else if (!!~contentType.indexOf('buffer')) {
        type = 'buffer'
        return response.arrayBuffer()
      }
    });
	return promise2Task(fetchResponse);
}