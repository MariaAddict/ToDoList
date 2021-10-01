export const ACTION_SET_CURRENT_USER = "ACTION_SET_CURRENT_USER";
export const ACTION_REMOVE_CURRENT_USER = "ACTION_REMOVE_CURRENT_USER";


export const setCurrentUser = (user) => ({
    type: ACTION_SET_CURRENT_USER,
    payload: user
})

export const removeCurrentUser = () => ({
    type: ACTION_REMOVE_CURRENT_USER,
})
