'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Button = require('./components/Button');

Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Button).default;
  }
});

var _Callout = require('./components/Callout');

Object.defineProperty(exports, 'Callout', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Callout).default;
  }
});

var _Center = require('./components/Center');

Object.defineProperty(exports, 'Center', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Center).default;
  }
});

var _Column = require('./components/Column');

Object.defineProperty(exports, 'Column', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Column).default;
  }
});

var _Container = require('./components/Container');

Object.defineProperty(exports, 'Container', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Container).default;
  }
});

var _Inky = require('./components/Inky');

Object.defineProperty(exports, 'Inky', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Inky).default;
  }
});

var _Item = require('./components/Item');

Object.defineProperty(exports, 'Item', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Item).default;
  }
});

var _Menu = require('./components/Menu');

Object.defineProperty(exports, 'Menu', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Menu).default;
  }
});

var _Row = require('./components/Row');

Object.defineProperty(exports, 'Row', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Row).default;
  }
});

var _Spacer = require('./components/Spacer');

Object.defineProperty(exports, 'Spacer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Spacer).default;
  }
});

var _Wrapper = require('./components/Wrapper');

Object.defineProperty(exports, 'Wrapper', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Wrapper).default;
  }
});
exports.default = inky;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Wrap an HTML string in the required boilerplate for Foundation for Emails.
 * @prop {String} [elem=''] HTML to insert.
 * @returns {String} Full HTML email.
 *
 * @example
 * import inky, { Container } from 'react-inky';
 * import { renderToString } from 'react-dom/server';
 *
 * const email = <Container />;
 * inky(renderToString(<Container />));
 */
function inky() {
  var elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return '\n    <!-- Emails use the XHTML Strict doctype -->\n    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n    <html xmlns="http://www.w3.org/1999/xhtml">\n    <head>\n    <!-- The character set should be utf-8 -->\n    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n    <meta name="viewport" content="width=device-width"/>\n    <!-- Link to the email\'s CSS, which will be inlined into the email -->\n    <link rel="stylesheet" href="assets/css/foundation-emails.css">\n    <style>\n      <!-- Your CSS to inline should be added here -->\n    </style>\n    </head>\n\n    <body>\n    <!-- Wrapper for the body of the email -->\n    <table class="body" data-made-with-foundation>\n      <tr>\n        <!-- The class, align, and <center> tag center the container -->\n        <td class="float-center" align="center" valign="top">\n          <center>\n            ' + elem + '\n          </center>\n        </td>\n      </tr>\n    </table>\n    </body>\n    </html>\n  ';
}