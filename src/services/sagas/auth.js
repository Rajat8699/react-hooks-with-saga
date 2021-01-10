import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from 'axios';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  GET_USER,
  USER_LOGGEDIN,
} from "../type";

//Login API
function postLoginApi(data) {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
      // .then(res => {
      //   const resp = res.data;
      // })
}
function* login(action) {
  try {
    const resp = yield call(postLoginApi, action);
    localStorage.userJWT = resp.token;
    localStorage.userId = resp.user.id;
    localStorage.isAdmin = resp.user.role;
    yield put({ type: LOGIN_SUCCESS, data: resp });
    yield put({
      type: USER_LOGGEDIN,
      token: resp.token,
      userId: resp.user.id,
      isAdmin: resp.user.role,
    });
    yield put({ type: GET_USER });
  } catch (resp) {
    yield put({ type: LOGIN_FAILED, error: resp });
  }
}

function* auth() {
  yield all([takeLatest(LOGIN, login)]);
}
export default auth;
