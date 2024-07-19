"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pick = void 0;
var pick = exports.pick = function pick(obj, keyChain) {
  var keys = keyChain.split('.');
  var result = obj;
  for (var i = 0; i < keys.length; i++) {
    var _obj$key;
    var key = keys[i];
    result = (_obj$key = obj[key]) !== null && _obj$key !== void 0 ? _obj$key : 'unknown';
  }
  return result;
};