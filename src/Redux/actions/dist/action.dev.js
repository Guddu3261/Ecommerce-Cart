"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEL = exports.ADD = void 0;

// for Add Item to cart
var ADD = function ADD(item) {
  return {
    type: "ADD_CART",
    payload: item
  };
}; // for delete from cart


exports.ADD = ADD;

var DEL = function DEL(id) {
  return {
    type: "RMV_CART",
    payload: id
  };
};

exports.DEL = DEL;