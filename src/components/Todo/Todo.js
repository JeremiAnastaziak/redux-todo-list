import React from 'react';

const Todo = ({ completed, text, id, store }) => {
    return (
        <li
            onClick={() => {
                store.dispatch({
                    type: 'TOGGLE_TODO',
                    id: id
                });
            }}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            {text}
        </li>
    );
};

export default Todo;
