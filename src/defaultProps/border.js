const classSet = {
    primary: 'fq-border-primary',
    secondary: 'fq-border-secondary',
    success: 'fq-border-success',
    danger: 'fq-border-danger',
    warning: 'fq-border-warning',
    info: 'fq-border-info',
    light: 'fq-border-light',
    dark: 'fq-border-dark',
    transparent: 'fq-border-transparent',
};

const defaultValue = 'primary';

/**
 * Default settings for borderColor props
 * PropTypes.oneOf([
 *         'primary',
 *         'secondary',
 *         'success',
 *         'danger',
 *         'warning',
 *         'info',
 *         'light',
 *         'dark',
 *         'transparent',
 *     ])
 */
export const borderProps = {
    classSet,
    defaultValue,
    values: Object.keys(classSet),
};
