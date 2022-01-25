function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';

const YouTubeEmbed = ({
  url,
  width,
  height,
  title,
  allowFullScreen,
  additionalClasses,
  ...props
}) => {
  const safeUrl = url.replace('/watch?v=', '/embed/');
  return /*#__PURE__*/React.createElement("iframe", _extends({
    id: "ytplayer",
    type: "text/html",
    width: width,
    height: height,
    src: safeUrl,
    frameBorder: "0",
    allowFullScreen: allowFullScreen,
    title: title,
    className: additionalClasses.join(' ')
  }, props));
};

YouTubeEmbed.propTypes = {
  /**
   * YouTUbe url
   */
  url: PropTypes.string.isRequired,

  /**
   * Iframe width
   */
  width: PropTypes.number,

  /**
   * Iframe height
   */
  height: PropTypes.number,

  /**
   * Title of iframe
   */
  title: PropTypes.string,

  /**
   * Does the video should allow to be put in fullscreen mode
   */
  allowFullScreen: PropTypes.bool,

  /**
   * Additional classes for embed
   */
  additionalClasses: PropTypes.arrayOf(PropTypes.string)
};
YouTubeEmbed.defaultProps = {
  width: 640,
  height: 360,
  title: 'Youtube video',
  allowFullScreen: true,
  additionalClasses: []
};
export default YouTubeEmbed;