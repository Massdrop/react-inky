'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Container />', function () {
  it('renders a container', function () {
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(
      _Container2.default,
      { className: 'custom-class' },
      'Container'
    ));

    (0, _chai.expect)(wrapper.html()).html.to.equal('\n      <table is="true" align="center" class="container custom-class">\n        <tbody>\n          <tr>\n            <td>Container</td>\n          </tr>\n        </tbody>\n      </table>\n    ');
  });

  it('sets context', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Container2.default, null));
    (0, _chai.expect)(wrapper.instance().getChildContext()).to.eql({
      columnCount: 12
    });
  });

  it('allows global column count to be changed', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Container2.default, { columnCount: 16 }));
    (0, _chai.expect)(wrapper.instance().getChildContext()).to.eql({
      columnCount: 16
    });
  });
});