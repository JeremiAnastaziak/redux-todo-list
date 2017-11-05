import React from 'react';

const Todo = ({ completed, text, id, onTodoClick }) => {
    return (
        <li
            onClick={() => onTodoClick(id)}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            {text}
        </li>
    );
};

export default Todo;
