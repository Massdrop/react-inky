'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _Wrapper = require('../Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Wrapper />', function () {
  it('renders a wrapper', function () {
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(
      _Wrapper2.default,
      { className: 'custom-class' },
      'Wrapper'
    ));

    (0, _chai.expect)(wrapper.html()).html.to.equal('\n      <table is="true" align="center" class="wrapper custom-class">\n        <tr>\n          <td class="wrapper-inner">Wrapper</td>\n        </tr>\n      </table>\n    ');
  });
});