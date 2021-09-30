import { ACTION_SET_CURRENT_USER } from './actions';

const initialState = {
  name: '',
  id: '',
  tasks: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SET_CURRENT_USER:
      return { ...action.payload };
    default:
      return state;
  }
}