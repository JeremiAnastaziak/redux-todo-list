import React, { Component } from 'react';
import logo from './logo.svg';
import expect from 'expect';
import deepFreeze from 'deep-freeze';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import './App.css';

/*const counter = (state = 0, action) => {
      if (action.type === 'INCREMENT') {
        return state + 1;
      }
      return state;
    }

    expect(
      counter(0, { type: 'INCREMENT' })  
    ).toEqual(1);

    console.log('Test passed');
    

    const addCounter = (list) => {
      return [...list, 0];
    };

    const testAddCounter = () => {
      const listBefore = [];
      const listAfter = [0];

      deepFreeze(listBefore);

      expect(
        addCounter(listBefore)
      ).toEqual(listAfter);
    }

    testAddCounter();
    */
    
    

    /*const testAddTodo = () => {
      const stateBefore = [];
      const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux'
      };
      const stateAfter = [
        {
          id: 0,
          text: 'Learn Redux',
          completed: false
        }
      ];

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        todos(stateBefore, action)
      ).toEqual(stateAfter);
    };
    testAddTodo();
    console.log('Test passed');


    const testToggleTodo = () => {

      const stateBefore = [
        {
          id: 0,
          text: 'Learn Redux',
          completed: false
        },
        {
          id: 1,
          text: 'Learn Mobx',
          completed: false
        }
      ];

      const action = {
        type: 'TOGGLE_TODO',
        id: 1,
      };

      const stateAfter = [
        {
          id: 0,
          text: 'Learn Redux',
          completed: false
        },
        {
          id: 1,
          text: 'Learn Mobx',
          completed: true
        }
      ];

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        todos(stateBefore, action)
      ).toEqual(stateAfter);
    }
    testToggleTodo();

    console.log('Test passed');
    */

        /*
    const todoApp = (state = {}, action) => {
      return {
        todos: todos(state.todos, action),
        visibilityFilter: visibilityFilter(state.visibilityFilter, action)
      };
    };


    const store = createStore(todoApp);
    console.log(store.getState());

    store.dispatch({
      type: 'ADD_TODO',
      id: 0,
      text: 'Learn Redux'
    });

    console.log(store.getState());

    store.dispatch({
      type: 'TOGGLE_TODO',
      id: 0,
    });

    store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SORT',
    });
    */ 


export default App;
