import {LOGIN, REGISTER, FORGOT_PASSWORD} from '../type';

export const login = (data) => ({
  type: LOGIN,
  data,
});

export const register = (data) => ({
  type: REGISTER,
  data,
});

export const forgotpassword = (data) => ({
  type: FORGOT_PASSWORD,
  data,
});