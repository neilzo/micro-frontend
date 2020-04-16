import { get } from 'lodash-es';

export const getUser = (state) => get(state, 'user');

export default {
  getUser,
};
