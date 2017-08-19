'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Row;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _getAttrs = require('../util/getAttrs');

var _getAttrs2 = _interopRequireDefault(_getAttrs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Grid row. Use this to define a grid containing a set of columns.
 *
 * @example
 * <Row>
 *   <Column></Column>
 * </Row>
 */
function Row(props) {
  return _react2.default.createElement(
    'table',
    _extends({ is: true }, (0, _getAttrs2.default)(props, 'table', 'row')),
    _react2.default.createElement(
      'tbody',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react.Children.map(props.children, function (child, index) {
          return (0, _react.cloneElement)(child, {
            first: index === 0,
            last: index === _react.Children.count(props.children) - 1
          });
        })
      )
    )
  );
}