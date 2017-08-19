'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiEnzyme = require('chai-enzyme');

var _chaiEnzyme2 = _interopRequireDefault(_chaiEnzyme);

var _chaiHtml = require('chai-html');

var _chaiHtml2 = _interopRequireDefault(_chaiHtml);

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiEnzyme2.default);
_chai2.default.use(_chaiHtml2.default);

describe('inky()', function () {
  var input = '<div></div>';
  var output = void 0;

  before(function () {
    output = (0, _2.default)(input);
  });

  it('returns a string', function () {
    (0, _chai.expect)(output).to.be.a('string');
  });

  it('contains input HTML', function () {
    (0, _chai.expect)(output).to.contain(input);
  });
});