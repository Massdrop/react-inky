'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Menu;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _getAttrs = require('../util/getAttrs');

var _getAttrs2 = _interopRequireDefault(_getAttrs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Menu(props) {
  return _react2.default.createElement(
    'table',
    _extends({ is: true }, (0, _getAttrs2.default)(props, 'table', 'menu')),
    _react2.default.createElement(
      'tr',
      null,
      _react2.default.createElement(
        'td',
        null,
        _react2.default.createElement(
          'table',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react.Children.map(props.children, function (child) {
              if (props.align === 'center' && typeof child.type === 'function' && child.type.name === 'Item') {
                return (0, _react.cloneElement)(child, {
                  className: (0, _classnames2.default)(child.props.className, 'float-center')
                });
              }

              return child;
            })
          )
        )
      )
    )
  );
}