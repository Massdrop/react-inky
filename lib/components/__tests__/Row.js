'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _Row = require('../Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Row />', function () {
  it('renders a row', function () {
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(
      _Row2.default,
      { className: 'custom-class' },
      _react2.default.createElement('td', null)
    ));

    (0, _chai.expect)(wrapper.html()).html.to.equal('\n      <table is="true" class="row custom-class">\n        <tbody>\n          <tr><td></td></tr>\n        </tbody>\n      </table>\n    ');
  });
});