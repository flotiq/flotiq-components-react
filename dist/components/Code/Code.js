"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Component for highlighting code.
 * Install highlight.js to make the component looks like in the examples, we use nord.css
 */
const Code = _ref => {
  let {
    children,
    language,
    highlight,
    additionalClasses,
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
    className: "language-".concat(lang)
  }, CodeToDisplay)));
};
Code.propTypes = {
  /**
   * Code content
   */
  children: _propTypes.default.string.isRequired,
  /**
   * Programming language name
   */
  language: _propTypes.default.string,
  /**
   * Additional classes for code
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Code.defaultProps = {
  language: 'bash',
  additionalClasses: []
};
var _default = exports.default = Code;