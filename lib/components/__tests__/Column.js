'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _Column = require('../Column');

var _Column2 = _interopRequireDefault(_Column);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Column />', function () {
  it('creates a basic column', function () {
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(_Column2.default, null));
    (0, _chai.expect)(wrapper.html()).html.to.equal('\n      <th is="true" class="small-12 large-12 columns">\n        <table>\n          <tr>\n            <th></th>\n            <th class="expander"></th>\n          </tr>\n        </table>\n      </th>\n    ');
  });

  it('renders a column with first class', function () {
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(_Column2.default, { first: true }));
    (0, _chai.expect)(wrapper.html()).html.to.equal('\n      <th is="true" class="small-12 large-12 columns first">\n        <table>\n          <tr>\n            <th></th>\n            <th class="expander"></th>\n          </tr>\n        </table>\n      </th>\n    ');
  });

  it('renders a column with last class', function () {
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(_Column2.default, { last: true }));
    (0, _chai.expect)(wrapper.html()).html.to.equal('\n      <th is="true" class="small-12 large-12 columns last">\n        <table>\n          <tr>\n            <th></th>\n            <th class="expander"></th>\n          </tr>\n        </table>\n      </th>\n    ');
  });

  it('allows expander to be removed', function () {
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(_Column2.default, { expander: false }));
    (0, _chai.expect)(wrapper.html()).html.to.equal('\n      <th is="true" class="small-12 large-12 columns">\n        <table>\n          <tr>\n            <th></th>\n          </tr>\n        </table>\n      </th>\n    ');
  });

  it('allows for children', function () {
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(
      _Column2.default,
      null,
      'Column'
    ));
    (0, _chai.expect)(wrapper.html()).html.to.equal('\n      <th is="true" class="small-12 large-12 columns">\n        <table>\n          <tr>\n            <th>Column</th>\n            <th class="expander"></th>\n          </tr>\n        </table>\n      </th>\n    ');
  });

  it('can use context of <Container />', function () {
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(
      _Container2.default,
      { columnCount: 16 },
      _react2.default.createElement(_Column2.default, null)
    ));
    (0, _chai.expect)(wrapper.find('.columns').parent().html()).html.to.equal('\n      <th is="true" class="small-16 large-16 columns">\n        <table>\n          <tr>\n            <th></th>\n            <th class="expander"></th>\n          </tr>\n        </table>\n      </th>\n    ');
  });
});