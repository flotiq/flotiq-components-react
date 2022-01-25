function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { borderProps } from '../../defaultProps/border';

const Delimiter = ({
  variant,
  style,
  additionalClasses,
  ...props
}) => {
  const styleClasses = {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
    double: 'border-double'
  };
  return /*#__PURE__*/React.createElement("hr", _extends({
    className: ['my-2', borderProps.classSet[variant], styleClasses[style], ...additionalClasses].join(' ')
  }, props));
};

Delimiter.propTypes = {
  /**
   * Delimiter variant
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),

  /**
   * Delimiter style
   */
  style: PropTypes.oneOf(['solid', 'dashed', 'dotted', 'double']),

  /**
   * Additional classes for delimiter
   */
  additionalClasses: PropTypes.arrayOf(PropTypes.string)
};
Delimiter.defaultProps = {
  variant: borderProps.defaultValue,
  style: 'solid',
  additionalClasses: []
};
export default Delimiter;