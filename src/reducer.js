import { ACTION_SET_CURRENT_USER, ACTION_REMOVE_CURRENT_USER, ACTION_CREATE_TASK, ACTION_SET_CHECKED_TASK } from './actions';

const initialState = {
  name: '',
  id: '',
  tasks: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SET_CURRENT_USER:
      return { ...action.payload };
    case ACTION_REMOVE_CURRENT_USER:
      return { ...initialState };
    case ACTION_CREATE_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case ACTION_SET_CHECKED_TASK:
      const tasks = state.tasks.map((task) => task.id === action.payload.id ? action.payload : task)
      return { ...state, tasks: tasks };;
    default:
      return state;
  }
}