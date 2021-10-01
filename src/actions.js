export const ACTION_SET_CURRENT_USER = "ACTION_SET_CURRENT_USER";
export const ACTION_REMOVE_CURRENT_USER = "ACTION_REMOVE_CURRENT_USER";
export const ACTION_CREATE_TASK = "ACTION_CREATE_TASK";
export const ACTION_SET_CHECKED_TASK= "ACTION_SET_CHECKED_TASK";


export const setCurrentUser = (user) => ({
    type: ACTION_SET_CURRENT_USER,
    payload: user
})

export const removeCurrentUser = () => ({
    type: ACTION_REMOVE_CURRENT_USER,
})

export const createTask = (task) => ({
    type: ACTION_CREATE_TASK ,
    payload: task
})

export const setTaskChecked = (task) => ({
    type: ACTION_SET_CHECKED_TASK,
    payload: task
})
