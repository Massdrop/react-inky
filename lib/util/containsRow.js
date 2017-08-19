'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = containsRow;

var _react = require('react');

/**
 * Determine if a collection of React elements contains a `<Row />`.
 * @param {ReactElement[]} children - Elements to check.
 * @returns {Boolean} If collection contains a `<Row />`;
 */
function containsRow(children) {
  var hasRow = false;

  _react.Children.forEach(children, function (child) {
    if (child && typeof child.type === 'function' && child.type.name === 'Row') {
      hasRow = true;
    }
  });

  return hasRow;
}