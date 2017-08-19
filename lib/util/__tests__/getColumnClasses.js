'use strict';

var _chai = require('chai');

var _getColumnClasses = require('../getColumnClasses');

var _getColumnClasses2 = _interopRequireDefault(_getColumnClasses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('getColumnClasses', function () {
  it('sets the value of small and large', function () {
    (0, _chai.expect)((0, _getColumnClasses2.default)({})).to.equal('columns small-12 large-12');
  });

  it('allows default column count to be changed', function () {
    (0, _chai.expect)((0, _getColumnClasses2.default)({}, 16)).to.equal('columns small-16 large-16');
  });

  it('sets the value of large', function () {
    (0, _chai.expect)((0, _getColumnClasses2.default)({ large: 4 })).to.equal('columns small-12 large-4');
  });

  it('defaults large to the value of small', function () {
    (0, _chai.expect)((0, _getColumnClasses2.default)({ small: 4 })).to.equal('columns small-4 large-4');
  });

  it('adds first class', function () {
    (0, _chai.expect)((0, _getColumnClasses2.default)({ first: true })).to.equal('columns small-12 large-12 first');
  });

  it('adds last class', function () {
    (0, _chai.expect)((0, _getColumnClasses2.default)({ last: true })).to.equal('columns small-12 large-12 last');
  });
});