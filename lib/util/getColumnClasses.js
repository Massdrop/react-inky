'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getColumnClasses;
var classnames = require('classnames');

/**
 * Generate CSS classes for a `<Column />`, including the base `columns`, sizing classes, and `first`/`last` classes.
 * @param {Object} props - Component props.
 * @param {Number} [defaultCount=12] - Default column count.
 * @returns {String} Column classes.
 */
function getColumnClasses(props) {
  var defaultCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;

  var smallSize = props.small || defaultCount;
  var largeSize = props.large || smallSize;

  return classnames('columns', 'small-' + smallSize, 'large-' + largeSize, {
    first: props.first,
    last: props.last
  });
}