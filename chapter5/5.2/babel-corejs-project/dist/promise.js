"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sleep = void 0;
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
var sleep = exports.sleep = function sleep() {
  var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};