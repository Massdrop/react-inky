'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _Spacer = require('../Spacer');

var _Spacer2 = _interopRequireDefault(_Spacer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Spacer />', function () {
  it('renders a spacer with a default size', function () {
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(_Spacer2.default, { className: 'custom-class' }));

    (0, _chai.expect)(wrapper.html()).html.to.equal('\n      <table is="true" class="spacer custom-class">\n        <tbody>\n          <tr>\n            <td height="16px" style="font-size:16px;line-height:16px;">&#xA0;</td>\n          </tr>\n        </tbody>\n      </table>\n    ');
  });

  it('renders a spacer with a specific size', function () {
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(_Spacer2.default, { size: '10' }));

    (0, _chai.expect)(wrapper.html()).html.to.equal('\n      <table is="true" class="spacer">\n        <tbody>\n          <tr>\n            <td height="10px" style="font-size:10px;line-height:10px;">&#xA0;</td>\n          </tr>\n        </tbody>\n      </table>\n    ');
  });

  it('creates a small-only spacer', function () {
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(_Spacer2.default, { sizeSm: '10' }));

    (0, _chai.expect)(wrapper.html()).html.to.equal('\n      <table is="true" class="spacer hide-for-large">\n        <tbody>\n          <tr>\n            <td height="10px" style="font-size:10px;line-height:10px;">&#xA0;</td>\n          </tr>\n        </tbody>\n      </table>\n    ');
  });

  it('creates a large-only spacer', function () {
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(_Spacer2.default, { sizeLg: '10' }));

    (0, _chai.expect)(wrapper.html()).html.to.equal('\n      <table is="true" class="spacer show-for-large">\n        <tbody>\n          <tr>\n            <td height="10px" style="font-size:10px;line-height:10px;">&#xA0;</td>\n          </tr>\n        </tbody>\n      </table>\n    ');
  });
});