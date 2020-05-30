import Api from '@micro-frontend/shared/src/Api';

import { ADD_USER } from '../constants/user';

const mockUserData = {
  name: 'Seina Shimabukuro',
  email: 'seinabb@harvard.edu',
};

export const addUser = (user) => ({
  type: ADD_USER,
  user,
});

export const fetchUser = () => (dispatch) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUserData);
    }, 500);
  }).then((userData) => {
    dispatch(addUser(userData));

    return userData;
  });
};

export const signup = (formValues) => () => {
  Api.post('/api/registration/signup', formValues)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch(e => {
      throw e;
    });
};
