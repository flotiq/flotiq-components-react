function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { sanitize } from 'dompurify';
/**
 * Component for headings
 */

const Header = ({
  level,
  text,
  anchor,
  alignement,
  additionalClasses,
  h1AdditionalClasses,
  h2AdditionalClasses,
  h3AdditionalClasses,
  h4AdditionalClasses,
  h5AdditionalClasses,
  h6AdditionalClasses,
  ...props
}) => {
  const safeLevel = Math.min(Math.max(level, 1), 6);
  const HeaderToRender = `h${safeLevel}`;
  const sizeClass = {
    1: ['text-4xl font-bold pt-6 pb-3', ...h1AdditionalClasses].join(' '),
    2: ['text-3xl font-bold pt-5 pb-2.5', ...h2AdditionalClasses].join(' '),
    3: ['text-2xl font-bold pt-4 pb-2', ...h3AdditionalClasses].join(' '),
    4: ['text-xl font-bold pt-3 pb-1.5', ...h4AdditionalClasses].join(' '),
    5: ['text-lg font-bold pt-2 pb-1', ...h5AdditionalClasses].join(' '),
    6: ['text-base font-bold pt-1', ...h6AdditionalClasses].join(' ')
  };
  const alignementClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };
  return /*#__PURE__*/React.isValidElement(text) ? /*#__PURE__*/React.createElement(HeaderToRender, _extends({
    className: [sizeClass[safeLevel], alignementClass[alignement], ...additionalClasses].join(' '),
    id: anchor
  }, props), text) : /*#__PURE__*/React.createElement(HeaderToRender, _extends({
    className: [sizeClass[safeLevel], alignementClass[alignement], ...additionalClasses].join(' '),
    dangerouslySetInnerHTML: {
      __html: sanitize(text)
    },
    id: anchor
  }, props));
};

Header.propTypes = {
  /**
   * Level of header
   */
  level: PropTypes.number,

  /**
   * Header contents
   */
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,

  /**
   * Header anchor
   */
  anchor: PropTypes.string,

  /**
   * Header alignement
   */
  alignement: PropTypes.oneOf(['left', 'center', 'right']),

  /**
   * Additional classes for header (all levels)
   */
  additionalClasses: PropTypes.arrayOf(PropTypes.string),

  /**
   * Additional classes for level 1 header
   */
  h1AdditionalClasses: PropTypes.arrayOf(PropTypes.string),

  /**
   * Additional classes for level 2 header
   */
  h2AdditionalClasses: PropTypes.arrayOf(PropTypes.string),

  /**
   * Additional classes for level 3 header
   */
  h3AdditionalClasses: PropTypes.arrayOf(PropTypes.string),

  /**
   * Additional classes for level 4 header
   */
  h4AdditionalClasses: PropTypes.arrayOf(PropTypes.string),

  /**
   * Additional classes for level 5 header
   */
  h5AdditionalClasses: PropTypes.arrayOf(PropTypes.string),

  /**
   * Additional classes for level 6 header
   */
  h6AdditionalClasses: PropTypes.arrayOf(PropTypes.string)
};
Header.defaultProps = {
  level: 1,
  anchor: '',
  alignement: 'left',
  additionalClasses: [],
  h1AdditionalClasses: [],
  h2AdditionalClasses: [],
  h3AdditionalClasses: [],
  h4AdditionalClasses: [],
  h5AdditionalClasses: [],
  h6AdditionalClasses: []
};
export default Header;