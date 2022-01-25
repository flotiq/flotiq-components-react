function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';

const Warning = ({
  message,
  title,
  additionalClasses,
  ...props
}) => /*#__PURE__*/React.createElement("div", _extends({
  className: additionalClasses.join(' ')
}, props), /*#__PURE__*/React.createElement("p", null, title), /*#__PURE__*/React.createElement("p", null, message));

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