import * as types from './types';

export const checkRefresh = (payload) => ({
  type: types.CHECK_REFRESH,
  payload: {
    path: `/auth/refresh/`,
    method: 'POST',
    data: payload
  },
  meta: {
    api: true,
    successMessage: 'Refress token valid',
    errorMessage: "Refress token not valid",
  },
});

export const saveAuthUser = (payload) => ({
  type: types.SAVE_USER_INFO,
  payload: {
    path: `/auth/register/`,
    method: 'POST',
    data: payload
  },
  meta: {
    api: true,
    successMessage: 'User registered successfully',
    errorMessage: "User registration failed",
  },
});


export const userLogin = (payload) => ({
  type: types.USER_LOGIN,
  payload: {
    path: `/auth/login/`,
    method: 'POST',
    data: payload
  },
  meta: {
    api: true,
    successMessage: 'User login successfully',
    errorMessage: "User login failed",
  },
});

export const setMsg = (payload) => ({
  type: types.SET_MSG,
  payload : payload,
  meta: {
    api: false,
    successMessage: 'mesage State changed',
    errorMessage: "message not changed",
  },
});


export const clearState = () => ({
  type: 'RESET_APP',
  meta: {
    api: false,
    successMessage: 'Successfully State Clear',
    errorMessage: "State not clear",
  },
});