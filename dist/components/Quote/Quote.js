function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { borderProps } from '../../defaultProps/border';
/**
 * Component for quote with caption
 */

const Quote = ({
  text,
  caption,
  variant,
  additionalClasses,
  quoteAdditionalClasses,
  captionAdditionalClasses,
  ...props
}) => /*#__PURE__*/React.createElement("div", _extends({
  className: ['flex flex-col italic', ...additionalClasses].join(' ')
}, props), /*#__PURE__*/React.createElement("p", {
  className: ['pl-6 md:pl-10 py-4 border-l-4', borderProps.classSet[variant], ...quoteAdditionalClasses].join(' ')
}, text), caption && /*#__PURE__*/React.createElement("p", {
  className: ['self-end mt-3 py-1.5 opacity-70', ...captionAdditionalClasses].join(' ')
}, caption));

Quote.propTypes = {
  /**
   * Quote content
   */
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,

  /**
   * Quote caption
   */
  caption: PropTypes.string.isRequired,

  /**
   * Quote variant
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'transparent']),

  /**
   * Additional classes for quote container
   */
  additionalClasses: PropTypes.arrayOf(PropTypes.string),

  /**
   * Additional classes for quote
   */
  quoteAdditionalClasses: PropTypes.arrayOf(PropTypes.string),

  /**
   * Additional classes for quote caption
   */
  captionAdditionalClasses: PropTypes.arrayOf(PropTypes.string)
};
Quote.defaultProps = {
  variant: borderProps.defaultValue,
  additionalClasses: [],
  quoteAdditionalClasses: [],
  captionAdditionalClasses: []
};
export default Quote;