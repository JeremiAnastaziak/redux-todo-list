import React from 'react';
import FilterLink from '../FilterLink/FilterLink';

const Filters = () => {
    return (
        <div>
            <FilterLink filter="SHOW_ALL" />
            <FilterLink filter="SHOW_ACTIVE" />
            <FilterLink filter="SHOW_COMPLETED" />
        </div>
    );
};

export default Filters;
