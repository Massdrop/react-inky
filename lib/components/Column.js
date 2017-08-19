'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Column;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _containsRow = require('../util/containsRow');

var _containsRow2 = _interopRequireDefault(_containsRow);

var _getAttrs = require('../util/getAttrs');

var _getAttrs2 = _interopRequireDefault(_getAttrs);

var _getColumnClasses = require('../util/getColumnClasses');

var _getColumnClasses2 = _interopRequireDefault(_getColumnClasses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Grid column. Place sections of email content inside these.
 * @todo Remove expander if housing a nested grid
 *
 * @example
 * <Row>
 *   <Column small="12" large="4">
 *     Left column
 *   </Column>
 *   <Column small="12" large="8">
 *     Right column
 *   </Column>
 * </Row>
 */
function Column(props, _ref) {
  var columnCount = _ref.columnCount;

  var classes = (0, _getColumnClasses2.default)(props, columnCount);
  var hasRow = (0, _containsRow2.default)(props.children);

  return _react2.default.createElement(
    'th',
    _extends({ is: true }, (0, _getAttrs2.default)(props, 'th', classes)),
    _react2.default.createElement(
      'table',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'th',
          null,
          props.children
        ),
        !hasRow && props.expander ? _react2.default.createElement('th', { className: 'expander' }) : null
      )
    )
  );
}

/**
 * Props for `<Column />`.
 * @type Object
 * @type {String} small - Width on small screens.
 * @type {String} large - Width on large screens.
 * @prop {Boolean} [expander=true] Include expander `<th />` in column.
 * @prop {Boolean} [first=false] Column is the first child.
 * @prop {Boolean} [last=false] Column is the last child.
 */
Column.propTypes = {
  small: _react.PropTypes.string,
  large: _react.PropTypes.string,
  expander: _react.PropTypes.bool,
  first: _react.PropTypes.bool,
  last: _react.PropTypes.bool

  /**
   * Default props for `<Column />`.
   * @type Object
   */
};Column.defaultProps = {
  expander: true,
  first: false,
  last: false

  /**
   * Context accessible from parent components.
   * @type Object
   * @prop {Number} columnCount - Default column count. Inherited from `<Container />`.
   */
};Column.contextTypes = {
  columnCount: _react.PropTypes.number
};