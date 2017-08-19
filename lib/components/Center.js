'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Center;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _getAttrs = require('../util/getAttrs');

var _getAttrs2 = _interopRequireDefault(_getAttrs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Center(props) {
  return _react2.default.createElement(
    'center',
    null,
    _react.Children.map(props.children, function (child, index) {
      var isReactElement = typeof child.type === 'function';

      return (0, _react.cloneElement)(child, _defineProperty({
        is: true,
        align: 'center'
      }, isReactElement ? 'className' : 'class', (0, _classnames2.default)(child.props.className, 'float-center')));
    })
  );
}