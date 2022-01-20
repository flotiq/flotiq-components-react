const classSet = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
};
const defaultValue = 'full';

export const roundedProps = {
    classSet,
    defaultValue,
    values: Object.keys(classSet),
};
