import * as actionTypes from './actionTypes';

export const taskFromLocalStorage = () => {
    return dispatch => {
        dispatch(loadTask());
        const countTime = setTimeout(() => {
            dispatch(fetchTask());
            clearTimeout(countTime);
        }, 1000);

    }
}

export const fetchTask = () => {
    return dispatch => {
        let tasks =  localStorage.getItem('tasks');
        if(tasks) {
            tasks = JSON.parse(tasks);
        } else {
            tasks = [];
        }
        dispatch({ type: actionTypes.TASK_FETCH_LOCAL_STORAGE, tasks: tasks })
    }
}

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

        let tasks =  localStorage.getItem('tasks');
        if(tasks) {
            tasks = JSON.parse(tasks);
            tasks.push(data);
        } else {
            tasks = [data];
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));
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
            let tasks = localStorage.getItem('tasks');
            if(tasks) {
                tasks = JSON.parse(tasks);
                tasks = tasks.filter(x => x.id !== id);
                localStorage.setItem('tasks', JSON.stringify(tasks));
            } 
            dispatch(closeSnack())
            clearTimeout(countTime);
        }, 500);
    }
}