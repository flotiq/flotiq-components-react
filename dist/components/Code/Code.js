"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaults = exports.default = exports.codePropTypes = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const defaults = exports.defaults = {
  language: 'bash',
  additionalClasses: []
};

/**
 * Component for highlighting code.
 * Install highlight.js to make the component looks like in the examples, we use nord.css
 */
const Code = _ref => {
  let {
    children,
    language = defaults.language,
    highlight,
    additionalClasses = defaults.additionalClasses,
    ...props
  } = _ref;
  (0, _react.useEffect)(() => {
    if (highlight) {
      highlight.highlightAll();
    }
  }, [highlight, language, children]);
  let CodeToDisplay = children;
  let lang = language;
  if (children.indexOf('```') === 0) {
    // eslint-disable-next-line prefer-destructuring
    lang = children.split('```')[1];
    const blocks = children.split('\n');
    blocks.splice(0, 1);
    CodeToDisplay = blocks.join('\n');
  }
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: additionalClasses.join(' ')
  }, props), /*#__PURE__*/_react.default.createElement("pre", null, /*#__PURE__*/_react.default.createElement("code", {
    className: `language-${lang}`
  }, CodeToDisplay)));
};
const codePropTypes = exports.codePropTypes = {
  /**
   * Programming language name
   */
  language: _propTypes.default.string,
  /**
   * Additional classes for code
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Code.propTypes = {
  ...codePropTypes,
  /**
   * Code content
   */
  children: _propTypes.default.string.isRequired
};
var _default = exports.default = Code;