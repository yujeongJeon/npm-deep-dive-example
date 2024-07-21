"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.sleep = void 0;
var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));
var _setTimeout2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-timeout"));
var sleep = exports.sleep = function sleep() {
  var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
  return new _promise.default(function (resolve) {
    return (0, _setTimeout2.default)(resolve, ms);
  });
};