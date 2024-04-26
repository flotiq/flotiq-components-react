"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Multi-column multi-row table component
 */
const Table = _ref => {
  let {
    content,
    headers,
    additionalClasses,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("table", _extends({
    className: ['w-full border-collapse mt-2 mb-4 border border-light', ...additionalClasses].join(' ')
  }, props), (headers === null || headers === void 0 ? void 0 : headers.length) > 0 && /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, headers.map(column => /*#__PURE__*/_react.default.createElement("th", {
    className: "border border-light p-3",
    key: column
  }, column)))), /*#__PURE__*/_react.default.createElement("tbody", null, content === null || content === void 0 ? void 0 : content.map((row, index) =>
  /*#__PURE__*/
  // eslint-disable-next-line react/no-array-index-key
  _react.default.createElement("tr", {
    key: index
  }, row.map(column => /*#__PURE__*/_react.default.createElement("td", {
    className: "border border-light p-3",
    key: column
  }, column))))));
};
Table.propTypes = {
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
Table.defaultProps = {
  headers: [],
  additionalClasses: []
};
var _default = exports.default = Table;