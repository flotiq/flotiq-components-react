const classSet = {
    none: 'fq-rounded-none',
    sm: 'fq-rounded-sm',
    md: 'fq-rounded-md',
    lg: 'fq-rounded-lg',
    xl: 'fq-rounded-xl',
    '2xl': 'fq-rounded-2xl',
    '3xl': 'fq-rounded-3xl',
    '4xl': 'fq-rounded-4xl',
    full: 'fq-rounded-full',
};
const defaultValue = 'full';

/**
 * Default settings for rounded props
 * PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full'])
 */
export const roundedProps = {
    classSet,
    defaultValue,
    values: Object.keys(classSet),
};
