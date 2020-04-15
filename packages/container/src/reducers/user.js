import { ADD_USER } from '../constants/user';

const initialState = {
  name: '',
  email: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      const {
        user: { name, email },
      } = action;

      return { ...state, name, email };
    }
    default:
      return state;
  }
};

export default user;
