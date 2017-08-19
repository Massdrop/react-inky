'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Button;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _getAttrs = require('../util/getAttrs');

var _getAttrs2 = _interopRequireDefault(_getAttrs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(props) {
  var expanded = props.className.match('expand') !== null;

  return _react2.default.createElement(
    'table',
    _extends({ is: true }, (0, _getAttrs2.default)(props, 'table', 'button')),
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
            _react2.default.createElement(
              'td',
              null,
              expanded ? _react2.default.createElement(
                'center',
                null,
                _react2.default.createElement(
                  'a',
                  { is: true, href: props.href, target: props.target, align: 'center', 'class': 'float-center' },
                  props.children
                )
              ) : _react2.default.createElement(
                'a',
                { href: props.href, target: props.target },
                props.children
              )
            )
          )
        )
      ),
      expanded ? _react2.default.createElement('td', { className: 'expander' }) : null
    )
  );
}

/**
 * Prop types for `<Button />`.
 * @type Object
 * @prop {String} href - Link destination.
 */
Button.propTypes = {
  href: _react.PropTypes.string.isRequired,
  target: _react.PropTypes.string
};

Button.defaultProps = {
  className: ''
};