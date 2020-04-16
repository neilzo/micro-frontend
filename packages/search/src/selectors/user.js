import get from 'lodash/get';

export const getUser = (state) => get(state, 'user');

export default {
  getUser,
};
