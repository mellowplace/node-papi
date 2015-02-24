/**
 * Promise helpers
 */

'use strict';

/**
 * Make defer from supplied Promise.
 */

function defer(Promise) {
  if (Promise.defer) {
    return Promise.defer;
  }

  return function defer() {
    var resolve;
    var reject;

    var promise = new Promise(function() {
      resolve = arguments[0];
      reject = arguments[1];
    });

    return {
      resolve: resolve,
      reject: reject,
      promise: promise,
    };
  };
}

/**
 * Make defer from supplied Promise.
 */

function callback(defer) {
  return function(err, res) {
    if (err) return defer.reject(err);
    return defer.resolve(res);
  };
}

/**
 * Module exports.
 */

exports.callback = callback;
exports.defer = defer;
