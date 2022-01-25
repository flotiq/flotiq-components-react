import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ content, withHeadings, additionalClasses, ...props }) => (
    <table className={['table mt-2 mb-4', ...additionalClasses].join(' ')} {...props}>
        {content.map((row, index) => (withHeadings && index === 0 ? (
            <thead>
                <tr>
                    {row.map((column) => (
                        <th>{column}</th>
                    ))}
                </tr>
            </thead>
        ) : (
            <thead>
                <tr>
                    {row.map((column) => (
                        <td className="text-m">{column}</td>
                    ))}
                </tr>
            </thead>
        )))}
    </table>
);

Table.propTypes = {
    /**
     * Table contents
     */
    content: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    /**
     * Does the table should have headings?
     */
    withHeadings: PropTypes.bool,
    /**
     * Additional classes for table
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

Table.defaultProps = {
    withHeadings: false,
    additionalClasses: [],
};

export default Table;
