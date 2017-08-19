'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _Menu = require('../Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Item = require('../Item');

var _Item2 = _interopRequireDefault(_Item);

var _Center = require('../Center');

var _Center2 = _interopRequireDefault(_Center);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Menu />', function () {
  it('renders a menu', function () {
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(
      _Menu2.default,
      { className: 'custom-class' },
      'Menu'
    ));

    (0, _chai.expect)(wrapper.html()).html.to.equal('\n      <table is="true" class="menu custom-class">\n        <tr>\n          <td>\n            <table>\n              <tr>Menu</tr>\n            </table>\n          </td>\n        </tr>\n      </table>\n    ');
  });

  it('passes center down to items', function () {
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(
      _Center2.default,
      null,
      _react2.default.createElement(
        _Menu2.default,
        null,
        _react2.default.createElement(_Item2.default, { href: '#' })
      )
    ));

    (0, _chai.expect)(wrapper.html()).html.to.equal('\n      <center>\n        <table is="true" align="center" class="menu float-center">\n          <tr>\n            <td>\n              <table>\n                <tr>\n                  <th is="true" class="menu-item float-center">\n                    <a href="#"></a>\n                  </th>\n                </tr>\n              </table>\n            </td>\n          </tr>\n        </table>\n      </center>\n    ');
  });
});