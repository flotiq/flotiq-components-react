function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { roundedProps } from '../../defaultProps/rounded';
import { backgroundProps } from '../../defaultProps/background';
/**
 * Primary UI component for user interaction
 */

const Button = ({
  label,
  onClick,
  variant,
  size,
  rounded,
  additionalClasses,
  ...props
}) => {
  const sizeClass = {
    sm: 'px-8 py-3 text-sm',
    md: 'px-12 py-4 text-base',
    lg: 'px-16 py-5 text-lg'
  };
  const hoverBackgroundClasses = {
    primary: 'hover:bg-primary-600',
    secondary: 'hover:bg-secondary-400',
    success: 'hover:bg-success-600',
    danger: 'hover:bg-danger-600',
    warning: 'hover:bg-warning-600',
    info: 'hover:bg-info-600',
    light: 'hover:bg-light-600',
    dark: 'hover:bg-dark-400',
    transparent: ''
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    className: ['inline-flex', 'items-center', 'leading-4', 'font-medium', roundedProps.classSet[rounded], 'shadow-sm', backgroundProps.classSet[variant], hoverBackgroundClasses[variant], 'transition-colors', 'duration-200', 'ease-in-out', 'focus:outline-none', sizeClass[size], ...additionalClasses].join(' ')
  }, props), label);
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'transparent']),

  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),

  /**
  * Button contents
  */
  label: PropTypes.string.isRequired,

  /**
   * Is this the rounded button?
   */
  rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full']),

  /**
   * Additional classes for button
   */
  additionalClasses: PropTypes.arrayOf(PropTypes.string),

  /**
  * Optional click handler
  */
  onClick: PropTypes.func
};
Button.defaultProps = {
  onClick: undefined,
  size: 'md',
  additionalClasses: [],
  variant: backgroundProps.defaultValue,
  rounded: roundedProps.defaultValue
};
export default Button;