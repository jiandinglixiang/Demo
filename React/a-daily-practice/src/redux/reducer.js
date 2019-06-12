import { combineReducers } from 'redux'
import { ADD_COUNT, REDUCE_COUNT } from './action'

function addCount (state = {val: 1}, action) {
    let temporary;
    switch (action.type) {
        case ADD_COUNT:
            temporary = state.val * 2;
            return Object.assign({}, state, {val: temporary});
        case REDUCE_COUNT:
            temporary = state.val / 2;
            return Object.assign({}, state, {val: temporary});
        default:
            return state;
    }
}

export default combineReducers({addCount})