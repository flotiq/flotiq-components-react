function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
/**
 * Component for displaying warnings
 */

const Warning = ({
  message,
  title,
  additionalClasses,
  ...props
}) => /*#__PURE__*/React.createElement("div", _extends({
  className: ['bg-warning-200 p-6', ...additionalClasses].join(' ')
}, props), /*#__PURE__*/React.createElement("p", {
  className: "font-bold text-xl text-warning-800"
}, title), /*#__PURE__*/React.createElement("hr", {
  className: "my-4 border-warning-600"
}), /*#__PURE__*/React.createElement("p", {
  className: "text-warning-800"
}, message));

Warning.propTypes = {
  /**
   * Warning message
   */
  message: PropTypes.string.isRequired,

  /**
   * Warning title
   */
  title: PropTypes.string.isRequired,

  /**
   * Additional classes for warning
   */
  additionalClasses: PropTypes.arrayOf(PropTypes.string)
};
Warning.defaultProps = {
  additionalClasses: []
};
export default Warning;