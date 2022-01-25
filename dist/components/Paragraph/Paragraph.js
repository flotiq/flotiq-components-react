function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({
  text,
  alignement,
  additionalClasses,
  ...props
}) => {
  const alignementClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };
  return /*#__PURE__*/React.createElement("p", _extends({
    className: ['text-base py-2', alignementClass[alignement], ...additionalClasses].join(' '),
    dangerouslySetInnerHTML: {
      __html: text
    }
  }, props));
};

Paragraph.propTypes = {
  /**
   * Paragraph content
   */
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,

  /**
   * Paragraph alignement
   */
  alignement: PropTypes.oneOf(['left', 'center', 'right']),

  /**
   * Additional classes for paragraph
   */
  additionalClasses: PropTypes.arrayOf(PropTypes.string)
};
Paragraph.defaultProps = {
  alignement: 'left',
  additionalClasses: []
};
export default Paragraph;