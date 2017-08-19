'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _Row = require('../Row');

var _Row2 = _interopRequireDefault(_Row);

var _Column = require('../Column');

var _Column2 = _interopRequireDefault(_Column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Grid', function () {
  it('can render nested grids', function () {
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(
      _Row2.default,
      null,
      _react2.default.createElement(
        _Column2.default,
        { first: true, last: true },
        _react2.default.createElement(_Row2.default, null)
      )
    ));

    (0, _chai.expect)(wrapper.html()).html.to.equal('\n      <table is="true" class="row">\n        <tbody>\n          <tr>\n            <th is="true" class="small-12 large-12 columns first last">\n              <table>\n                <tr>\n                  <th>\n                    <table is="true" class="row">\n                      <tbody>\n                        <tr></tr>\n                      </tbody>\n                    </table>\n                  </th>\n                </tr>\n              </table>\n            </th>\n          </tr>\n        </tbody>\n      </table>\n    ');
  });

  it('can detect the first and last child in a row', function () {
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(
      _Row2.default,
      null,
      _react2.default.createElement(_Column2.default, null),
      _react2.default.createElement(_Column2.default, null)
    ));

    (0, _chai.expect)(wrapper.html()).html.to.equal('\n      <table is="true" class="row">\n        <tbody>\n          <tr>\n            <th is="true" class="small-12 large-12 columns first">\n              <table>\n                <tr>\n                  <th></th>\n                  <th class="expander"></th>\n                </tr>\n              </table>\n            </th>\n            <th is="true" class="small-12 large-12 columns last">\n              <table>\n                <tr>\n                  <th></th>\n                  <th class="expander"></th>\n                </tr>\n              </table>\n            </th>\n          </tr>\n        </tbody>\n      </table>\n    ');
  });
});