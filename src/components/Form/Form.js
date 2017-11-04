import React from 'react';
import uuid from 'uuid/v1';

const Form = ({ store }) => {
    let input = null;
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
                    store.dispatch({
                        type: 'ADD_TODO',
                        text: input.value,
                        id: uuid()
                    });
                    input.focus();
                    input.value = '';
                }}
            >
                Add todo
            </button>
        </div>
    );
};

export default Form;
