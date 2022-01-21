import React from 'react';

const Table = ({ content, withHeadings }) => (
    <table className="table text-content-table mt-2 mb-4">
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

export default Table;
