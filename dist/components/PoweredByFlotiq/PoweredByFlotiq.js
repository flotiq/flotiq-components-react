"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const LogoBadge = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEt' + 'LSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZ' + 'lcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJ' + 'odHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveG' + 'xpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzOCAzOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW' + '5kOm5ldyAwIDAgMzggMzg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS' + '5zdDF7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojMDA4M0ZDO30KPC9zdHlsZT4KPH' + 'BhdGggY2xhc3M9InN0MSIgZD0iTTAsNS4yQzAsMi4zLDIuMiwwLDQuOSwwaDguMmMwLjYsMCwxLjEsMC4xLDEuN' + 'iwwLjNjMi41LDAuOSw0LjcsMy4yLDcuNCwzLjJjMi42LDAsNC45LTIuMiw3LjQtMy4yCglDMzAsMC4xLDMwLjUsM' + 'CwzMS4xLDBDMzMuOCwwLDM2LDIuMywzNiw1LjJjMCwyLjktMi4yLDUuMi00LjksNS4yYy0wLjYsMC0xLjEtMC4xL' + 'TEuNi0wLjNjLTIuNS0wLjktNC43LTMuMi03LjQtMy4yCgljLTIuNiwwLTQuOSwyLjItNy40LDMuMmMtMC41LDAuM' + 'i0xLjEsMC4zLTEuNiwwLjNINC45QzIuMiwxMC4zLDAsOCwwLDUuMnogTTAsMTljMC0yLjksMi4yLTUuMiw0LjktN' + 'S4yYzAuNywwLDEuNCwwLjIsMiwwLjUKCWMyLjIsMSw0LjIsMyw2LjYsM2MyLjQsMCw0LjQtMiw2LjYtM2MwLjYtM' + 'C4zLDEuMy0wLjUsMi0wLjVjMi43LDAsNC45LDIuMyw0LjksNS4yYzAsMi45LTIuMiw1LjItNC45LDUuMmMtMC43L' + 'DAtMS40LTAuMi0yLTAuNQoJYy0yLjItMS00LjItMy02LjYtM2MtMi40LDAtNC40LDItNi42LDNjLTAuNiwwLjMtM' + 'S4zLDAuNS0yLDAuNUMyLjIsMjQuMSwwLDIxLjgsMCwxOXogTTQuOSwyNy42Yy0yLjcsMC00LjksMi4zLTQuOSw1L' + 'jIKCXMyLjIsNS4yLDQuOSw1LjJjMi43LDAsNC45LTIuMyw0LjktNS4yUzcuNiwyNy42LDQuOSwyNy42eiIvPgo8L' + '3N2Zz4K';

/**
 * Footer element with powered by flotiq information
 */
const PoweredByFlotiq = _ref => {
  let {
    badge,
    text,
    additionalClasses,
    utmCampaign,
    ...props
  } = _ref;
  return badge ? /*#__PURE__*/_react.default.createElement("div", {
    className: ['flex', 'items-center', 'font-inter', 'px-2', 'py-1', 'shadow-md', 'shadow-black-400/15', 'rounded-md', 'fixed', 'bottom-[20px]', 'right-[20px]', 'text-xs', 'bg-white', 'border', 'border-light-blue', ...additionalClasses].join(' ')
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: LogoBadge,
    width: 11,
    height: 11,
    alt: "Flotiq",
    className: "mr-1"
  }), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://flotiq.com/?utm_source=poweredByFlotiq&utm_medium=poweredBy".concat(utmCampaign !== '' ? "&utm_campaign=".concat(utmCampaign) : ''),
    target: "_blank",
    rel: "noreferrer"
  }, text)) : /*#__PURE__*/_react.default.createElement("div", _extends({
    className: ['flex', 'items-center', 'mr-12', 'font-inter', ...additionalClasses].join(' ')
  }, props), /*#__PURE__*/_react.default.createElement("img", {
    className: "block h-5 md:h-6 w-auto mr-2",
    src: LogoBadge,
    alt: "Flotiq",
    width: 274.96,
    height: 276
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-center text-xs md:text-base font-semibold"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://flotiq.com/?utm_source=poweredByFlotiq&utm_medium=poweredBy".concat(utmCampaign !== '' ? "&utm_campaign=".concat(utmCampaign) : ''),
    target: "_blank",
    rel: "noreferrer"
  }, text)));
};
PoweredByFlotiq.propTypes = {
  /**
   * Should the component be a floating pill badge
   */
  badge: _propTypes.default.bool,
  /**
   * Component text
   */
  text: _propTypes.default.string,
  /**
   * Additional classes for delimiter
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),
  /**
   * UTM campaign name
   */
  utmCampaign: _propTypes.default.string
};
PoweredByFlotiq.defaultProps = {
  badge: false,
  text: 'Powered by Flotiq',
  additionalClasses: [],
  utmCampaign: ''
};
var _default = exports.default = PoweredByFlotiq;