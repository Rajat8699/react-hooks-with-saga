import {GET_USER} from '../type';

export const users = (data) => ({
  type: GET_USER,
  data:data
});