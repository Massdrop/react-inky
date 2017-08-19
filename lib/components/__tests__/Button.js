'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Button />', function () {
  it('renders a basic button', function () {
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(
      _Button2.default,
      { className: 'custom-class', href: 'example.com' },
      'Button'
    ));
    (0, _chai.expect)(wrapper.html()).html.to.equal('\n      <table is="true" class="button custom-class">\n        <tr>\n          <td>\n            <table>\n              <tr>\n                <td><a href="example.com">Button</a></td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n      </table>\n    ');
  });

  it('allows a target to be set', function () {
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(_Button2.default, { href: 'example.com', target: '_blank' }));
    (0, _chai.expect)(wrapper.html()).html.to.equal('\n      <table is="true" class="button">\n        <tr>\n          <td>\n            <table>\n              <tr>\n                <td><a href="example.com" target="_blank"></a></td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n      </table>\n    ');
  });

  it('renders an expanded button', function () {
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(_Button2.default, { className: 'expand', href: 'example.com' }));
    (0, _chai.expect)(wrapper.html()).html.to.equal('\n      <table is="true" class="button expand">\n        <tr>\n          <td>\n            <table>\n              <tr>\n                <td>\n                  <center><a is="true" href="example.com" align="center" class="float-center"></a></center>\n                </td>\n              </tr>\n            </table>\n          </td>\n          <td class="expander"></td>\n        </tr>\n      </table>\n    ');
  });
});