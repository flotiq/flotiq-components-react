function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const List = ({
  items,
  style,
  level,
  additionalClasses,
  ...props
}) => {
  const ListType = style === 'ordered' ? 'ol' : 'ul';
  const listStyleClass = {
    ordered: 'list-decimal',
    unordered: 'list-disc'
  };
  const safeLevel = Math.max(level, 1);
  const marginClass = safeLevel === 1 ? 'ml-0' : 'ml-6';
  return /*#__PURE__*/React.createElement(ListType, _extends({
    className: ['space-y-4', listStyleClass[style], 'list-inside', marginClass, ...additionalClasses].join(' ')
  }, props), items.map(item => /*#__PURE__*/React.createElement(Fragment, {
    key: item.content
  }, /*#__PURE__*/React.createElement("li", {
    dangerouslySetInnerHTML: {
      __html: item.content
    },
    className: "text-sm md:text-lg"
  }), item.items && item.items.length > 0 && /*#__PURE__*/React.createElement(List, {
    items: item.items,
    style: style,
    level: safeLevel + 1
  }))));
};

const Items = {
  content: PropTypes.string.isRequired
};
Items.items = PropTypes.arrayOf(PropTypes.shape(Items));
List.propTypes = {
  /**
   * List content
   */
  items: PropTypes.arrayOf(PropTypes.shape(Items)).isRequired,

  /**
   * List style
   */
  style: PropTypes.oneOf(['ordered', 'unordered']),

  /**
   * List level
   */
  level: PropTypes.number,

  /**
   * Additional classes for list
   */
  additionalClasses: PropTypes.arrayOf(PropTypes.string)
};
List.defaultProps = {
  style: 'unordered',
  level: 1,
  additionalClasses: []
};
export default List;