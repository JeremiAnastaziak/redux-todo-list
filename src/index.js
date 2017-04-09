import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
//import Todo from './Todo'
import './index.css';

const todo = (state, action) => {
      switch (action.type) {
        case 'ADD_TODO':
          return {
              id: action.id,
              text: action.text,
              completed: false
            }
        case 'TOGGLE_TODO':
          if (state.id !== action.id) return state;
          return {
            ...state,
            completed: !state.completed
          }
        default:
          return state;
      }
    }

    const todos = (state = [], action) => {
      switch (action.type) {
        case 'ADD_TODO':
          return [
            ...state,
            todo(undefined, action) 
          ];
        case 'TOGGLE_TODO':
          return state.map( t => todo(t, action));
        default: 
          return state;
      }
    }
    const getVisibleTodos = (todos, filter) => {
      switch (filter) {
        case 'SHOW_ALL':
          return todos;
        case 'SHOW_ACTIVE': 
          return todos.filter( todo => !todo.completed);
        case 'SHOW_COMPLETED':
          return todos.filter ( todo => todo.completed);
        default: 
          return todos;
      }
    }

    const visibilityFilter = (state = 'SHOW_ALL', action) => {
      switch (action.type) {
        case 'SET_VISIBILITY_FILTER': {
          console.log(store.getState())
          return action.filter;
        }
          
        default:
          return state;
      }
    }

    const todoApp = combineReducers({
      todos,
      visibilityFilter
    })

    const store = createStore(todoApp);
    console.log(store.getState());

    let nextTodoId = 0;

const FilterLink = ({
  filter,
  currentFilter,
  children
}) => {

  if (filter === currentFilter) return <span>{children}</span>;

  return (
    <a href='#' 
       onClick={ e => {
          e.preventDefault();
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter
          });
       }}
    >
      {children}
    </a>
  );
};
class Todo extends React.Component {
  render() {
    const todo = this.props.todoData;
    return (
      <li  
        
        onClick={() => {
          store.dispatch({
            type: 'TOGGLE_TODO',
            id: todo.id
          });
        }}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none'
        }}
        > 
        {todo.text} 
      </li>
    )
  }
}

class App extends Component {


  render() {
    const {
      todos,
      visibilityFilter
    } = this.props;

    const visibleTodos = getVisibleTodos(
      todos,
      visibilityFilter
    );

    return (
      <div className="App">
      	<input type="text" ref={node => {
      		this.input = node;
      	}} />
        <button onClick={ () => {
          store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: nextTodoId++
          })
          this.input.focus();
          this.input.value = '';
          console.log(store.getState());
        }}>
        Add todo
        </button>
        <ul className="todoList">
        {visibleTodos.map( todo => 
           <Todo todoData={todo}  key={todo.id}/>
        )}
        </ul>
        <p>
          Show:
          {' '}
          <FilterLink 
            filter='SHOW_ALL' 
            currentFilter={visibilityFilter}
          >
            Show all
          </FilterLink>
          {' '}
          <FilterLink  
            filter='SHOW_ACTIVE' 
            currentFilter={visibilityFilter}
          >
            Show active
          </FilterLink>
          {' '}
          <FilterLink  
            filter='SHOW_COMPLETED' 
            currentFilter={visibilityFilter}
          >
            Show completed
          </FilterLink>
          {' '}
        </p>
      </div>
    );
  }
}

const render = () => {
	ReactDOM.render(
	  <App {...store.getState()}/>,
	  document.getElementById('root')
	);
}

store.subscribe(render);

render();

