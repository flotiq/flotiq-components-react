function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { roundedProps } from '../../defaultProps/rounded';
/**
 * Component for displaying images
 */

const Image = ({
  url,
  caption,
  stretched,
  rounded,
  additionalClasses,
  captionAdditionalClasses,
  ...props
}) => {
  console.log(additionalClasses, props);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", _extends({
    src: url,
    alt: caption,
    className: [stretched ? 'w-full' : '', roundedProps.classSet[rounded], ...additionalClasses].join(' ')
  }, props)), caption && /*#__PURE__*/React.createElement("p", {
    className: ['pt-2 opacity-70 italic', ...captionAdditionalClasses].join(' ')
  }, caption));
};

Image.propTypes = {
  /**
   * Image url
   */
  url: PropTypes.string.isRequired,

  /**
   * Image caption
   */
  caption: PropTypes.string,

  /**
   * Does image should be stretched
   */
  stretched: PropTypes.bool,

  /**
   * Image roundness?
   */
  rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', 'full']),

  /**
   * Additional classes for image
   */
  additionalClasses: PropTypes.arrayOf(PropTypes.string),

  /**
   * Additional classes for image caption
   */
  captionAdditionalClasses: PropTypes.arrayOf(PropTypes.string)
};
Image.defaultProps = {
  caption: null,
  stretched: false,
  rounded: 'none',
  additionalClasses: [],
  captionAdditionalClasses: []
};
export default Image;