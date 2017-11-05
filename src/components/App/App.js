import React from 'react';
import VisibleTodoList from '../VisibleTodoList/VisibleTodoList';
import Form from '../Form/Form';
import Filters from '../Filters/Filters';

const App = () => {

    return (
        <div className="App">
            <Form/>
            <VisibleTodoList/>
            <Filters />
        </div>
    );
};

export default App;
