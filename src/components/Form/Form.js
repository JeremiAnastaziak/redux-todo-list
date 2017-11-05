import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v1';
import { addTodo } from '../../actions/actions';

const Form = ({ dispatch }) => {
    let input;
    return (
        <div>
            <input
                style={{ borderColor: 'grey' }}
                type="text"
                ref={node => {
                    input = node;
                }}
            />
            <button
                onClick={() => {
                    dispatch(addTodo(input.value, uuid()));
                    input.focus();
                    input.value = '';
                }}
            >
                Add todo
            </button>
        </div>
    );
};

export default connect(null, null)(Form);
