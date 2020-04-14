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
