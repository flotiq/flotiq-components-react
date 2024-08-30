import React from 'react';
import PropTypes from 'prop-types';

export const defaults = {
    level: 1,
    anchor: '',
    alignment: 'left',
    additionalClasses: [],
    h1AdditionalClasses: [],
    h2AdditionalClasses: [],
    h3AdditionalClasses: [],
    h4AdditionalClasses: [],
    h5AdditionalClasses: [],
    h6AdditionalClasses: [],
};

/**
 * Component for headings
 */
const Header = ({
    level = defaults.level,
    children,
    anchor = defaults.anchor,
    alignment = defaults.alignment,
    additionalClasses = defaults.additionalClasses,
    h1AdditionalClasses = defaults.h1AdditionalClasses,
    h2AdditionalClasses = defaults.h2AdditionalClasses,
    h3AdditionalClasses = defaults.h3AdditionalClasses,
    h4AdditionalClasses = defaults.h4AdditionalClasses,
    h5AdditionalClasses = defaults.h5AdditionalClasses,
    h6AdditionalClasses = defaults.h6AdditionalClasses,
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
        6: ['text-base font-bold pt-1', ...h6AdditionalClasses].join(' '),
    };
    const alignmentClass = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };

    return (
        React.isValidElement(children) ? (
            <HeaderToRender
                className={[sizeClass[safeLevel], alignmentClass[alignment], ...additionalClasses].join(' ')}
                id={anchor}
                {...props}
            >
                {children}
            </HeaderToRender>
        ) : (
            <HeaderToRender
                className={[sizeClass[safeLevel], alignmentClass[alignment], ...additionalClasses].join(' ')}
                dangerouslySetInnerHTML={{ __html: children }}
                id={anchor}
                {...props}
            />
        )
    );
};

export const headerPropTypes = {
    /**
     * Level of header
     */
    level: PropTypes.number,
    /**
     * Header anchor
     */
    anchor: PropTypes.string,
    /**
     * Header alignment
     */
    alignment: PropTypes.oneOf(['left', 'center', 'right']),
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
    h6AdditionalClasses: PropTypes.arrayOf(PropTypes.string),
};

Header.propTypes = {
    /**
     * Header contents
     */
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    ...headerPropTypes,
};

export default Header;
