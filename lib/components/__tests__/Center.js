'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _Center = require('../Center');

var _Center2 = _interopRequireDefault(_Center);

var _Menu = require('../Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Center />', function () {
  it('adds align="center" and float-center class to a basic element', function () {
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(
      _Center2.default,
      null,
      _react2.default.createElement('div', null)
    ));
    (0, _chai.expect)(wrapper.html()).html.to.equal('\n      <center>\n        <div is="true" align="center" class="float-center"></div>\n      </center>\n    ');
  });

  it('adds align="center" and float-center class to a React component', function () {
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(
      _Center2.default,
      null,
      _react2.default.createElement(_Menu2.default, null)
    ));
    (0, _chai.expect)(wrapper.html()).html.to.equal('\n      <center>\n        <table is="true" align="center" class="menu float-center">\n          <tr>\n            <td>\n              <table>\n                <tr></tr>\n              </table>\n            </td>\n          </tr>\n        </table>\n      </center>\n    ');
  });
});