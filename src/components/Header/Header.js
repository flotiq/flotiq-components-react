import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for headings
 */
const Header = ({
    level,
    children,
    anchor,
    alignment,
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
        1: ['fq-text-4xl fq-font-bold fq-pt-6 fq-pb-3', ...h1AdditionalClasses].join(' '),
        2: ['fq-text-3xl fq-font-bold fq-pt-5 fq-pb-2.5', ...h2AdditionalClasses].join(' '),
        3: ['fq-text-2xl fq-font-bold fq-pt-4 fq-pb-2', ...h3AdditionalClasses].join(' '),
        4: ['fq-text-xl fq-font-bold fq-pt-3 fq-pb-1.5', ...h4AdditionalClasses].join(' '),
        5: ['fq-text-lg fq-font-bold fq-pt-2 fq-pb-1', ...h5AdditionalClasses].join(' '),
        6: ['fq-text-base fq-font-bold fq-pt-1', ...h6AdditionalClasses].join(' '),
    };
    const alignmentClass = {
        left: 'fq-text-left',
        center: 'fq-text-center',
        right: 'fq-text-right',
    };

    return (
        React.isValidElement(children) ? (
            <HeaderToRender
                className={['fq-base', sizeClass[safeLevel], alignmentClass[alignment], ...additionalClasses].join(' ')}
                id={anchor}
                {...props}
            >
                {children}
            </HeaderToRender>
        ) : (
            <HeaderToRender
                className={['fq-base', sizeClass[safeLevel], alignmentClass[alignment], ...additionalClasses].join(' ')}
                dangerouslySetInnerHTML={{ __html: children }}
                id={anchor}
                {...props}
            />
        )
    );
};

Header.propTypes = {
    /**
     * Level of header
     */
    level: PropTypes.number,
    /**
     * Header contents
     */
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
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

Header.defaultProps = {
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

export default Header;
