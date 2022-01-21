import React from 'react';

const Quote = ({ text, caption }) => (
    <div className="text-content-quote mt-2 mb-4">
        <p className="text-content-quote-quote text-m">{text}</p>
        <p className="text-content-quote-caption pt-4">{caption}</p>
    </div>
);

export default Quote;
