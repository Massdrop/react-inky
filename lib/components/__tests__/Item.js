'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _Item = require('../Item');

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Item />', function () {
  it('renders a menu item', function () {
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(
      _Item2.default,
      { className: 'custom-class', href: 'example.com' },
      'Item'
    ));
    (0, _chai.expect)(wrapper.html()).html.to.equal('\n      <th is="true" class="menu-item custom-class">\n        <a href="example.com">Item</a>\n      </th>\n    ');
  });

  it('allows a target to be set', function () {
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(_Item2.default, { href: 'example.com', target: '_blank' }));
    (0, _chai.expect)(wrapper.html()).html.to.equal('\n      <th is="true" class="menu-item">\n        <a href="example.com" target="_blank"></a>\n      </th>\n    ');
  });
});