import { connect } from 'react-redux';
import Link from '../Link/Link';
import { setVisibilityFilter } from '../../actions/actions';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter,
        filter: ownProps.filter
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onFilterClick: () =>
            dispatch(setVisibilityFilter(ownProps.filter))
    };
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
