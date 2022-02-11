function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import LogoBadge from '../../assets/flotiq-logo-badge.svg';
/**
 * Footer element with powered by flotiq information
 */

const PoweredByFlotiq = ({
  badge,
  text,
  additionalClasses,
  ...props
}) => badge ? /*#__PURE__*/React.createElement("div", {
  className: ['flex', 'items-center', 'font-sora', 'px-2', 'py-1', 'shadow-md', 'shadow-black-400/15', 'rounded-md', 'fixed', 'bottom-[20px]', 'right-[20px]', 'text-xs', 'bg-white', 'border', 'border-light-blue', ...additionalClasses].join(' ')
}, /*#__PURE__*/React.createElement("img", {
  src: LogoBadge,
  width: "11",
  height: "11",
  alt: "Flotiq",
  className: "mr-1"
}), /*#__PURE__*/React.createElement("a", {
  href: "https://flotiq.com",
  target: "_blank",
  rel: "noreferrer"
}, text)) : /*#__PURE__*/React.createElement("div", _extends({
  className: ['flex', 'items-center', 'mr-12', 'font-sora', ...additionalClasses].join(' ')
}, props), /*#__PURE__*/React.createElement("img", {
  className: "block h-5 md:h-6 w-auto mr-2",
  src: LogoBadge,
  alt: "Flotiq"
}), /*#__PURE__*/React.createElement("p", {
  className: "text-center text-xs md:text-base font-semibold"
}, /*#__PURE__*/React.createElement("a", {
  href: "https://flotiq.com",
  target: "_blank",
  rel: "noreferrer"
}, text)));

PoweredByFlotiq.propTypes = {
  /**
   * Should the component be a floating pill badge
   */
  badge: PropTypes.bool,

  /**
   * Component text
   */
  text: PropTypes.string,

  /**
   * Additional classes for delimiter
   */
  additionalClasses: PropTypes.arrayOf(PropTypes.string)
};
PoweredByFlotiq.defaultProps = {
  badge: false,
  text: 'Powered by Flotiq',
  additionalClasses: []
};
export default PoweredByFlotiq;