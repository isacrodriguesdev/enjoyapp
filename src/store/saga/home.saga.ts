import axios, { AxiosResponse } from 'axios';
import { put } from 'redux-saga/effects';

export function* asyncGetHomeUsers() { 
  try {

    const response: AxiosResponse = yield axios.get("/users");

    yield put({
      type: "home/SUCCESS_GETED_USERS",
      payload: response.data
    })

  } catch (error) {

    yield put({
      type: "home/ERROR_GETED_USERS",
      payload: true
    })
  }
}