import React from 'react';

const Link = ({ filter, active, onFilterClick }) => {

    const massage = (filter) => filter.replace('_', ' ').toLowerCase()

    if (active)
        return <span style={{ marginRight: '5px' }}>{massage(filter)}</span>;

    return (
        <a
            href="#"
            style={{ marginRight: '8px' }}
            onClick={e => {
                e.preventDefault();
                onFilterClick();
            }}
        >
            {massage(filter)}
        </a>
    );
};

export default Link;
