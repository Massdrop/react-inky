'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Callout;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _getAttrs = require('../util/getAttrs');

var _getAttrs2 = _interopRequireDefault(_getAttrs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Callout(props) {
  return _react2.default.createElement(
    'table',
    _extends({ is: true }, (0, _getAttrs2.default)(props, 'table', 'callout')),
    _react2.default.createElement(
      'tr',
      null,
      _react2.default.createElement(
        'th',
        { className: 'callout-inner' },
        props.children
      ),
      _react2.default.createElement('th', { className: 'expander' })
    )
  );
}