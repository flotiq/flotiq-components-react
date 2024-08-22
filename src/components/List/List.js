import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export const defaults = {
    style: 'unordered',
    level: 1,
    additionalClasses: [],
};

/**
 * Component for listings
 */
const List = ({
    items,
    style = defaults.style,
    level = defaults.level,
    additionalClasses = defaults.additionalClasses,
    ...props
}) => {
    const ListType = style === 'ordered' ? 'ol' : 'ul';
    const listStyleClass = {
        ordered: 'list-decimal',
        unordered: 'list-disc',
    };
    const safeLevel = Math.max(level, 1);
    const marginClass = safeLevel === 1 ? 'ml-0' : 'ml-6';
    return (
        <ListType
            className={[
                'space-y-1',
                listStyleClass[style],
                'list-inside',
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

export default List;
