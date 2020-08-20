/* eslint-disable */
'use strict'

// Try to fix the error window is not defined while using npm package
// https://github.com/hellosign/hellosign-embedded/issues/107
if (typeof window === 'undefined') { global.window = {} }

var Artalk = require('./dist/Artalk.js')

module.exports = Artalk
module.exports.default = module.exports
