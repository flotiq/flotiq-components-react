function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';

const Video = ({
  url,
  caption,
  additionalClasses,
  ...props
}) => /*#__PURE__*/React.createElement("div", {
  className: ['text-content-image pt-2 pb-2', ...additionalClasses].join(' ')
}, /*#__PURE__*/React.createElement("video", _extends({
  width: "320",
  height: "240",
  controls: true
}, props), /*#__PURE__*/React.createElement("source", {
  src: url,
  type: "video/mp4"
}), /*#__PURE__*/React.createElement("source", {
  src: url,
  type: "video/ogg"
}), "Your browser does not support the video tag."), /*#__PURE__*/React.createElement("p", {
  className: "text-content-image-caption pt-2"
}, caption));

Video.propTypes = {
  /**
   * Video url
   */
  url: PropTypes.string.isRequired,

  /**
   * Video caption
   */
  caption: PropTypes.string,

  /**
   * Additional classes for video
   */
  additionalClasses: PropTypes.arrayOf(PropTypes.string)
};
Video.defaultProps = {
  caption: null,
  additionalClasses: []
};
export default Video;