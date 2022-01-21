import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const List = ({
  items,
  style,
  level = 1,
  additionalClasses = []
}) => {
  const ListType = style === 'ordered' ? 'ol' : 'ul';
  const listStyleClass = {
    ordered: 'list-decimal',
    unordered: 'list-disc'
  };
  const marginClass = level === 1 ? 'ml-0' : 'ml-6';
  return /*#__PURE__*/React.createElement(ListType, {
    className: ['space-y-4', listStyleClass[style], 'list-inside', marginClass, ...additionalClasses].join(' ')
  }, items.map(item => /*#__PURE__*/React.createElement(Fragment, {
    key: item.content
  }, /*#__PURE__*/React.createElement("li", {
    dangerouslySetInnerHTML: {
      __html: item.content
    },
    className: "text-sm md:text-lg"
  }), item.items && item.items.length > 0 && /*#__PURE__*/React.createElement(List, {
    items: item.items,
    style: style,
    level: level + 1
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
   * Additional classes for button
   */
  additionalClasses: PropTypes.arrayOf(PropTypes.string)
};
List.defaultProps = {
  style: 'unordered',
  additionalClasses: []
};
export default List;