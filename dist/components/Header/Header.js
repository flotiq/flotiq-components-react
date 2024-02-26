"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["level", "children", "anchor", "alignment", "additionalClasses", "h1AdditionalClasses", "h2AdditionalClasses", "h3AdditionalClasses", "h4AdditionalClasses", "h5AdditionalClasses", "h6AdditionalClasses"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Component for headings
 */
var Header = function Header(_ref) {
  var level = _ref.level,
      children = _ref.children,
      anchor = _ref.anchor,
      alignment = _ref.alignment,
      additionalClasses = _ref.additionalClasses,
      h1AdditionalClasses = _ref.h1AdditionalClasses,
      h2AdditionalClasses = _ref.h2AdditionalClasses,
      h3AdditionalClasses = _ref.h3AdditionalClasses,
      h4AdditionalClasses = _ref.h4AdditionalClasses,
      h5AdditionalClasses = _ref.h5AdditionalClasses,
      h6AdditionalClasses = _ref.h6AdditionalClasses,
      props = _objectWithoutProperties(_ref, _excluded);

  var safeLevel = Math.min(Math.max(level, 1), 6);
  var HeaderToRender = "h".concat(safeLevel);
  var sizeClass = {
    1: ['text-4xl font-bold pt-6 pb-3'].concat(_toConsumableArray(h1AdditionalClasses)).join(' '),
    2: ['text-3xl font-bold pt-5 pb-2.5'].concat(_toConsumableArray(h2AdditionalClasses)).join(' '),
    3: ['text-2xl font-bold pt-4 pb-2'].concat(_toConsumableArray(h3AdditionalClasses)).join(' '),
    4: ['text-xl font-bold pt-3 pb-1.5'].concat(_toConsumableArray(h4AdditionalClasses)).join(' '),
    5: ['text-lg font-bold pt-2 pb-1'].concat(_toConsumableArray(h5AdditionalClasses)).join(' '),
    6: ['text-base font-bold pt-1'].concat(_toConsumableArray(h6AdditionalClasses)).join(' ')
  };
  var alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };
  return /*#__PURE__*/_react.default.isValidElement(children) ? /*#__PURE__*/_react.default.createElement(HeaderToRender, _extends({
    className: [sizeClass[safeLevel], alignmentClass[alignment]].concat(_toConsumableArray(additionalClasses)).join(' '),
    id: anchor
  }, props), children) : /*#__PURE__*/_react.default.createElement(HeaderToRender, _extends({
    className: [sizeClass[safeLevel], alignmentClass[alignment]].concat(_toConsumableArray(additionalClasses)).join(' '),
    dangerouslySetInnerHTML: {
      __html: children
    },
    id: anchor
  }, props));
};

Header.propTypes = {
  /**
   * Level of header
   */
  level: _propTypes.default.number,

  /**
   * Header contents
   */
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired,

  /**
   * Header anchor
   */
  anchor: _propTypes.default.string,

  /**
   * Header alignment
   */
  alignment: _propTypes.default.oneOf(['left', 'center', 'right']),

  /**
   * Additional classes for header (all levels)
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for level 1 header
   */
  h1AdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for level 2 header
   */
  h2AdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for level 3 header
   */
  h3AdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for level 4 header
   */
  h4AdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for level 5 header
   */
  h5AdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for level 6 header
   */
  h6AdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Header.defaultProps = {
  level: 1,
  anchor: '',
  alignment: 'left',
  additionalClasses: [],
  h1AdditionalClasses: [],
  h2AdditionalClasses: [],
  h3AdditionalClasses: [],
  h4AdditionalClasses: [],
  h5AdditionalClasses: [],
  h6AdditionalClasses: []
};
var _default = Header;
exports.default = _default;