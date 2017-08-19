'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Spacer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _getAttrs = require('../util/getAttrs');

var _getAttrs2 = _interopRequireDefault(_getAttrs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Spacer component to create vertical space between elements.
 *
 * @example
 * <Button href="example.com/signup.html">Sign Up</Button>
 * <Spacer size="10" />
 * <Button href="example.com/learnmore.html">Learn More</Button>
 */
function Spacer(props) {
  var classes = (0, _classnames2.default)('spacer', {
    'hide-for-large': props.sizeSm,
    'show-for-large': props.sizeLg
  });

  var size = props.sizeLg || props.sizeSm || props.size;

  return _react2.default.createElement(
    'table',
    _extends({ is: true }, (0, _getAttrs2.default)(props, 'table', classes)),
    _react2.default.createElement(
      'tbody',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          { height: size + 'px', style: {
              fontSize: size + 'px',
              lineHeight: size + 'px'
            } },
          '\xA0'
        )
      )
    )
  );
}

/**
 * Prop types for `<Spacer />`,
 * @type Object
 * @prop {String} [size='16'] Height of spacer in pixels.
 * @prop {String} sizeSm - Height of spacer in pixels, and it will only appear on small screens.
 * @prop {String} sizeLg - Height of spacer in pixels, and it will only appear on large screens.
 */
Spacer.propTypes = {
  size: _react.PropTypes.string,
  sizeSm: _react.PropTypes.string,
  sizeLg: _react.PropTypes.string
};

Spacer.defaultProps = {
  size: '16'
};