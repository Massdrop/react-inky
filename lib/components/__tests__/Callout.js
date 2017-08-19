'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _Callout = require('../Callout');

var _Callout2 = _interopRequireDefault(_Callout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Callout />', function () {
  it('renders a callout', function () {
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(
      _Callout2.default,
      { className: 'custom-class' },
      'Callout'
    ));

    (0, _chai.expect)(wrapper.html()).html.to.equal('\n      <table is="true" class="callout custom-class">\n        <tr>\n          <th class="callout-inner">Callout</th>\n          <th class="expander"></th>\n        </tr>\n      </table>\n    ');
  });
});