'use strict';

var _chai = require('chai');

var _getAttrs = require('../getAttrs');

var _getAttrs2 = _interopRequireDefault(_getAttrs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('getAttrs()', function () {
  var output = void 0;

  before(function () {
    var props = {
      large: 6,
      small: 12,
      style: { background: 'white' },
      className: 'header',
      align: 'center'
    };
    output = (0, _getAttrs2.default)(props, 'table', 'row');
  });

  it('returns an object', function () {
    (0, _chai.expect)(output).to.be.an('object');
  });

  it('filters out custom props', function () {
    (0, _chai.expect)(output).to.have.all.keys(['style', 'class', 'align']);
  });

  it('adds class names', function () {
    (0, _chai.expect)(output.class).to.equal('row header');
  });

  it('adds align manually', function () {
    (0, _chai.expect)(output.align).to.equal('center');
  });
});