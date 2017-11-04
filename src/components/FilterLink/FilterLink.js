import React from 'react';

const FilterLink = ({ filter, currentFilter, store }) => {

    const massage = (filter) => filter.replace('_', ' ').toLowerCase()

    if (filter === currentFilter)
        return <span style={{ marginRight: '5px' }}>{massage(filter)}</span>;

    return (
        <a
            href="#"
            style={{ marginRight: '8px' }}
            onClick={e => {
                e.preventDefault();
                store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter
                });
            }}
        >
            {massage(filter)}
        </a>
    );
};

export default FilterLink;
