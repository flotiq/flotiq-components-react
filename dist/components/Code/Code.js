function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Code = ({
  code,
  language,
  highlight,
  additionalClasses,
  ...props
}) => {
  useEffect(() => {
    if (highlight) {
      highlight.highlightAll();
    }
  }, [highlight]);
  let CodeToDisplay = code;
  let lang = language;

  if (code.indexOf('```') === 0) {
    // eslint-disable-next-line prefer-destructuring
    lang = code.split('```')[1];
    const blocks = code.split('\n');
    blocks.splice(0, 1);
    CodeToDisplay = blocks.join('\n');
  }

  return /*#__PURE__*/React.createElement("div", _extends({
    className: additionalClasses.join(' ')
  }, props), /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", {
    dangerouslySetInnerHTML: {
      __html: CodeToDisplay
    },
    className: `language-${lang}`
  })));
};

Code.propTypes = {
  /**
   * Code content
   */
  code: PropTypes.string.isRequired,

  /**
   * Programming language name
   */
  language: PropTypes.string,

  /**
   * Additional classes for code
   */
  additionalClasses: PropTypes.arrayOf(PropTypes.string)
};
Code.defaultProps = {
  language: 'bash',
  additionalClasses: []
};
export default Code;