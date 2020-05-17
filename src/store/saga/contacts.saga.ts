import axios, { AxiosResponse } from 'axios';
import { put } from 'redux-saga/effects';

export function* asyncGetUsersFavorites() {
  try {
    const response: AxiosResponse = yield axios.get("/contacts");

    console.log(response.data.favorites)

    yield put({
      type: "users/GETED_USERS_FAVORITES",
      payload: response.data.favorites
    });
  } catch (error) {

  }
}

export function* asyncGetUsersMatchs() {
  try {
    const response: AxiosResponse = yield axios.get("/matchs");

    yield put({
      type: "users/GETED_USERS_MATCHS",
      payload: response.data
    });
  } catch (error) {

  }
}
