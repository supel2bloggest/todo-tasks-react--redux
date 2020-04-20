import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    tasks: [],
    open_snack: false
}

const reducers = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.TASK_FETCH_LOCAL_STORAGE: return { ...state, loading: false, tasks: action.tasks }
        case actionTypes.TASK_SUCCESS: return { ...state, loading: false, open_snack: true, tasks: state.tasks.concat(action.task) }
        case actionTypes.TASK_CLOSE_SNACK: return { ...state, open_snack: false }
        case actionTypes.TASK_LOAD: return { ...state, loading: true }
        case actionTypes.TASK_REMOVE: return { ...state, loading: false, open_snack: true, tasks: [...state.tasks.filter((x) => x.id !== action.id)] }
        default: return state;
    }
}

export default reducers;