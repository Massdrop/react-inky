'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Item;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _getAttrs = require('../util/getAttrs');

var _getAttrs2 = _interopRequireDefault(_getAttrs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Item(props) {
  return _react2.default.createElement(
    'th',
    _extends({ is: true }, (0, _getAttrs2.default)(props, 'th', 'menu-item')),
    _react2.default.createElement(
      'a',
      { href: props.href, target: props.target },
      props.children
    )
  );
}

Item.propTypes = {
  href: _react.PropTypes.string.isRequired,
  target: _react.PropTypes.string
};