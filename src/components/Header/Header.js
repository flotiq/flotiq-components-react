import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ level = 1, text, anchor, alignement, additionalClasses = [], ...props }) => {
    const safeLevel = Math.min(Math.max(level, 1), 6);
    const HeaderToRender = `h${safeLevel}`;
    const sizeClass = {
        1: 'text-4xl py-10 font-bold',
        2: 'text-3xl py-5 font-bold',
        3: 'text-2xl py-5 font-bold',
        4: 'text-xl py-5 font-bold',
        5: 'text-lg py-5',
        6: 'text-base py-5',
    };
    const alignementClass = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };

    return (
        <HeaderToRender
            className={['px-12', sizeClass[safeLevel], alignementClass[alignement], ...additionalClasses].join(' ')}
            dangerouslySetInnerHTML={{ __html: text }}
            id={anchor}
            {...props}
        />
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
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    /**
     * Header anchor
     */
    anchor: PropTypes.string,
    /**
     * Header anchor
     */
    alignement: PropTypes.oneOf(['left', 'center', 'right']),
    /**
     * Additional classes for button
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

Header.defaultProps = {
    level: 1,
    anchor: '',
    alignement: 'left',
    additionalClasses: [],
};

export default Header;
