import React from 'react';
import PropTypes from 'prop-types';
import LogoBadge from '../../assets/flotiq-logo-badge.svg';

/**
 * Footer element with powered by flotiq information
 */
const PoweredByFlotiq = ({ badge, text, additionalClasses, ...props }) => (badge ? (
    <div
        className={['flex', 'items-center', 'font-sora', 'px-2', 'py-1',
            'shadow-md', 'shadow-black-400/15', 'rounded-md',
            'fixed', 'bottom-[20px]', 'right-[20px]', 'text-xs',
            'bg-white', 'border', 'border-light-blue', ...additionalClasses].join(' ')}
    >
        <img src={LogoBadge} width="11" height="11" alt="Flotiq" className="mr-1" />
        <a href="https://flotiq.com" target="_blank" rel="noreferrer">{text}</a>
    </div>
) : (
    <div className={['flex', 'items-center', 'mr-12', 'font-sora', ...additionalClasses].join(' ')} {...props}>
        <img
            className="block h-5 md:h-6 w-auto mr-2"
            src={LogoBadge}
            alt="Flotiq"
        />
        <p className="text-center text-xs md:text-base font-semibold">
            <a href="https://flotiq.com" target="_blank" rel="noreferrer">{text}</a>
        </p>
    </div>
));

PoweredByFlotiq.propTypes = {
    /**
     * Should the component be a floating pill badge
     */
    badge: PropTypes.bool,
    /**
     * Component text
     */
    text: PropTypes.string,
    /**
     * Additional classes for delimiter
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

PoweredByFlotiq.defaultProps = {
    badge: false,
    text: 'Powered by Flotiq',
    additionalClasses: [],
};

export default PoweredByFlotiq;
