function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { backgroundProps } from '../../defaultProps/background';
import { borderProps } from '../../defaultProps/border';

const Quote = ({
  text,
  caption,
  variant,
  additionalClasses,
  ...props
}) => /*#__PURE__*/React.createElement("div", _extends({
  className: ['px-12 md:px-28 flex flex-col', ...additionalClasses].join(' ')
}, props), /*#__PURE__*/React.createElement("p", {
  className: ['px-8 md:px-12 border-l-4', borderProps.classSet[variant]].join(' ')
}, text), /*#__PURE__*/React.createElement("p", {
  className: ['self-end mt-3 mr-12 px-8 py-1.5 rounded', backgroundProps.classSet[variant]].join(' ')
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
   * Additional classes for quote
   */
  additionalClasses: PropTypes.arrayOf(PropTypes.string)
};
Quote.defaultProps = {
  variant: borderProps.defaultValue,
  additionalClasses: []
};
export default Quote;