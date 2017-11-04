import React from 'react';
import Todo from '../Todo/Todo';
import FilterLink from '../FilterLink/FilterLink';
import Form from '../Form/Form';
import { getVisibleTodos } from '../../reducers/reducers';

const App = ({ todos, visibilityFilter, store }) => {
    const visibleTodos = getVisibleTodos(todos, visibilityFilter);

    return (
        <div className="App">
            <Form store={store} />
            {visibleTodos.map(todo => (
                <Todo {...todo} key={todo.id} store={store} />
            ))}
            <FilterLink
                store={store}
                filter="SHOW_ALL"
                currentFilter={visibilityFilter}
            />
            <FilterLink
                store={store}
                filter="SHOW_ACTIVE"
                currentFilter={visibilityFilter}
            />
            <FilterLink
                store={store}
                filter="SHOW_COMPLETED"
                currentFilter={visibilityFilter}
            />
        </div>
    );
};

export default App;
