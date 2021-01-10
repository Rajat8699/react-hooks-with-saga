import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from 'axios';
import { GET_USER_SUCCESS, GET_USER, GET_USER_FAILED } from "../type";


//getuserapi
function getuserApi(action) {
    return axios.get(`http://localhost:8000/users`)
  }
  function* users(action) {
    try {
      const resp = yield call(getuserApi, action);
      yield put({ type: GET_USER_SUCCESS, data: resp });
    } catch (resp) {
      yield put({ type: GET_USER_FAILED, error: resp });
    }
  }

function* home() {
  yield all([takeLatest(GET_USER, users)]);
}
export default home;
