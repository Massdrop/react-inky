'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAttrs;

var _reactAttrsFilter = require('react-attrs-filter');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Compile attributes for a component's root element, based on its tag and default class name.
 * @param {Object} props - Component props.
 * @param {String} tag - Component root element.
 * @param {String} className - Component root class name.
 * @returns {Object} Filtered props.
 *
 * @example
 * const props = {
 *   large: 6,
 *   small: 12,
 *   style: { background: 'white' },
 *   className: 'header'
 * }
 *
 * // Only returns "style" and "className", because the other two are custom props
 * // The class "header" is added to the base "row"
 * const attrs = getAttrs(props, 'table', 'row'); // => { style: ..., className: 'row header' }
 * <table {...attrs}></table>
 */
function getAttrs(props, tag) {
  var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  // Filter out non-HTML attributes
  var output = (0, _reactAttrsFilter.filterPropsFor)(props, tag);

  // Append class names in props to base classes
  output.class = (0, _classnames2.default)(className, props.className);

  // `style` isn't included in `filterPropsFor` and must be copied manually
  if (props.style) output.style = props.style;

  // Same with `align`, since it's a deprecated attribute
  if (props.align) output.align = props.align;

  return output;
}