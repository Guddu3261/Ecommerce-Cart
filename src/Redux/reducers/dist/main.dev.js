"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reducers = require("./reducers");

var rootred = (0, _redux.combineReducers)({
  cartreducer: _reducers.cartreducer
});
var _default = rootred;
exports["default"] = _default;