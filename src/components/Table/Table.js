import React from 'react';
import PropTypes from 'prop-types';

/**
 * Multi-column multi-row table component
 */
const Table = ({ content, headers, additionalClasses, ...props }) => (
    <table
        className={[
            'fq-base w-full border-collapse mt-2 mb-4 border border-light',
            ...additionalClasses,
        ].join(' ')}
        {...props}
    >
        {headers.length > 0 && (
            <thead>
                <tr>
                    {headers.map((column) => (
                        <th className="border border-light p-3" key={column}>{column}</th>
                    ))}
                </tr>
            </thead>
        )}
        <tbody>
            {content.map((row, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <tr key={index}>
                    {row.map((column) => (
                        <td className="border border-light p-3" key={column}>{column}</td>
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
