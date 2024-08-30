"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tablePropTypes = exports.defaults = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const defaults = exports.defaults = {
  headers: [],
  additionalClasses: []
};

/**
 * Multi-column multi-row table component
 */
const Table = _ref => {
  let {
    content,
    headers = defaults.headers,
    additionalClasses = defaults.additionalClasses,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("table", _extends({
    className: ['w-full border-collapse mt-2 mb-4 border border-light', ...additionalClasses].join(' ')
  }, props), headers?.length > 0 && /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, headers.map(column => /*#__PURE__*/_react.default.createElement("th", {
    className: "border border-light p-3",
    key: column
  }, column)))), /*#__PURE__*/_react.default.createElement("tbody", null, content?.map((row, index) =>
  /*#__PURE__*/
  // eslint-disable-next-line react/no-array-index-key
  _react.default.createElement("tr", {
    key: index
  }, row.map(column => /*#__PURE__*/_react.default.createElement("td", {
    className: "border border-light p-3",
    key: column
  }, column))))));
};
const tablePropTypes = exports.tablePropTypes = {
  /**
   * Table contents
   */
  content: _propTypes.default.arrayOf(_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]))).isRequired,
  /**
   * Array of headers
   */
  headers: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element])),
  /**
   * Additional classes for table
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Table.propTypes = tablePropTypes;
var _default = exports.default = Table;