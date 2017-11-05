import React from 'react';
import Todo from '../Todo/Todo';

const TodoList = ({ todos, onTodoClick }) => {
    return (
        <div>
            {todos.map(todo => (
                <Todo key={todo.id} {...todo} onTodoClick={onTodoClick} />
            ))}
        </div>
    );
};

export default TodoList;
