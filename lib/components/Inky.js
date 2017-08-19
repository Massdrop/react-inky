"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Inky;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Inky(props) {
  return _react2.default.createElement(
    "tr",
    null,
    _react2.default.createElement(
      "td",
      null,
      _react2.default.createElement("img", { src: "https://raw.githubusercontent.com/arvida/emoji-cheat-sheet.com/master/public/graphics/emojis/octopus.png" })
    )
  );
}