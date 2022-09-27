import React from 'react';
import PropTypes from 'prop-types';

/**
 * Multi-column multi-row table component
 */
const Table = ({ content, headers, additionalClasses, ...props }) => (
    <table
        className={[
            'fq-base fq-w-full fq-border-collapse fq-mt-2 fq-mb-4 fq-border fq-border-light',
            ...additionalClasses,
        ].join(' ')}
        {...props}
    >
        {headers.length > 0 && (
            <thead>
                <tr>
                    {headers.map((column) => (
                        <th className="fq-border fq-border-light fq-p-3" key={column}>{column}</th>
                    ))}
                </tr>
            </thead>
        )}
        <tbody>
            {content.map((row, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <tr key={index}>
                    {row.map((column) => (
                        <td className="fq-border fq-border-light fq-p-3" key={column}>{column}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
);

Table.propTypes = {
    /**
     * Table contents
     */
    content: PropTypes.arrayOf(
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.element])),
    ).isRequired,
    /**
     * Array of headers
     */
    headers: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.element])),
    /**
     * Additional classes for table
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

Table.defaultProps = {
    headers: [],
    additionalClasses: [],
};

export default Table;
