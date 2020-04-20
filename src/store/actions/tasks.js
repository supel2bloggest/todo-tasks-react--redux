import * as actionTypes from './actionTypes';

export const addTask = (action) => {
    return dispatch => { 
        dispatch(loadTask());
        const countTime = setTimeout(() => {
            dispatch(addSuccess(action));
            clearTimeout(countTime);
        }, 500);
    };
}

export const closeSnack = () => {
    return { type: actionTypes.TASK_CLOSE_SNACK }
}

export const addSuccess = (data) => {
    return dispatch => {
        dispatch({ type: actionTypes.TASK_SUCCESS, task: data })
        dispatch(closeSnack())
    };
};


export const loadTask = () => {
    return { type: actionTypes.TASK_LOAD }
}

export const removeTask = (id) => {
    return dispatch => {
        dispatch(loadTask());
        const countTime = setTimeout(() => {
            dispatch({ type: actionTypes.TASK_REMOVE, id });
            dispatch(closeSnack())
            clearTimeout(countTime);
        }, 500);
    }
}