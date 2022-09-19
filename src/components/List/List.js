import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * Component for listings
 */
const List = ({ items, style, level, additionalClasses, ...props }) => {
    const ListType = style === 'ordered' ? 'ol' : 'ul';
    const listStyleClass = {
        ordered: 'fq-list-decimal',
        unordered: 'fq-list-disc',
    };
    const safeLevel = Math.max(level, 1);
    const marginClass = safeLevel === 1 ? 'fq-ml-0' : 'fq-ml-6';
    return (
        <ListType
            className={[
                'fq-base',
                'fq-space-y-1',
                listStyleClass[style],
                'fq-list-inside',
                marginClass,
                ...additionalClasses,
            ].join(' ')}
            {...props}
        >
            {items.map((item) => (
                <Fragment key={item.content}>
                    {React.isValidElement(item.content) ? (<li>{item.content}</li>) : (
                        <li
                            dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                    )}
                    {(item.items && item.items.length > 0) && (
                        <List items={item.items} style={style} level={safeLevel + 1} />)}
                </Fragment>
            ))}
        </ListType>
    );
};

const Items = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
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
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

List.defaultProps = {
    style: 'unordered',
    level: 1,
    additionalClasses: [],
};

export default List;
