'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _Inky = require('../Inky');

var _Inky2 = _interopRequireDefault(_Inky);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Inky />', function () {
  it('releases the kraken', function () {
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(_Inky2.default, null));

    (0, _chai.expect)(wrapper.html()).html.to.equal('\n      <tr>\n        <td>\n          <img src="https://raw.githubusercontent.com/arvida/emoji-cheat-sheet.com/master/public/graphics/emojis/octopus.png" />\n        </td>\n      </tr>\n    ');
  });
});