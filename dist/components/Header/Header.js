"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaults = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const defaults = exports.defaults = {
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

/**
 * Component for headings
 */
const Header = _ref => {
  let {
    level = defaults.level,
    children,
    anchor = defaults.anchor,
    alignment = defaults.alignment,
    additionalClasses = defaults.additionalClasses,
    h1AdditionalClasses = defaults.h1AdditionalClasses,
    h2AdditionalClasses = defaults.h2AdditionalClasses,
    h3AdditionalClasses = defaults.h3AdditionalClasses,
    h4AdditionalClasses = defaults.h4AdditionalClasses,
    h5AdditionalClasses = defaults.h5AdditionalClasses,
    h6AdditionalClasses = defaults.h6AdditionalClasses,
    ...props
  } = _ref;
  const safeLevel = Math.min(Math.max(level, 1), 6);
  const HeaderToRender = `h${safeLevel}`;
  const sizeClass = {
    1: ['text-4xl font-bold pt-6 pb-3', ...h1AdditionalClasses].join(' '),
    2: ['text-3xl font-bold pt-5 pb-2.5', ...h2AdditionalClasses].join(' '),
    3: ['text-2xl font-bold pt-4 pb-2', ...h3AdditionalClasses].join(' '),
    4: ['text-xl font-bold pt-3 pb-1.5', ...h4AdditionalClasses].join(' '),
    5: ['text-lg font-bold pt-2 pb-1', ...h5AdditionalClasses].join(' '),
    6: ['text-base font-bold pt-1', ...h6AdditionalClasses].join(' ')
  };
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };
  return /*#__PURE__*/_react.default.isValidElement(children) ? /*#__PURE__*/_react.default.createElement(HeaderToRender, _extends({
    className: [sizeClass[safeLevel], alignmentClass[alignment], ...additionalClasses].join(' '),
    id: anchor
  }, props), children) : /*#__PURE__*/_react.default.createElement(HeaderToRender, _extends({
    className: [sizeClass[safeLevel], alignmentClass[alignment], ...additionalClasses].join(' '),
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
var _default = exports.default = Header;