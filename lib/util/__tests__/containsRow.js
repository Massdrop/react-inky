'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _containsRow = require('../containsRow');

var _containsRow2 = _interopRequireDefault(_containsRow);

var _Row = require('../../components/Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('containsRow()', function () {
  it('returns false if there are no rows', function () {
    (0, _chai.expect)((0, _containsRow2.default)([_react2.default.createElement('div', null)])).to.be.false;
  });

  it('returns true if there is a row', function () {
    (0, _chai.expect)((0, _containsRow2.default)([_react2.default.createElement(_Row2.default, null), _react2.default.createElement('div', null)])).to.be.true;
  });
});