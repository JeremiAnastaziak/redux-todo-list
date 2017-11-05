import { connect } from 'react-redux';
import { getVisibleTodos } from '../../reducers/reducers';
import TodoList from '../TodoList/TodoList';
import { toggleTodo } from '../../actions/actions';

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            state.visibilityFilter
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList;
