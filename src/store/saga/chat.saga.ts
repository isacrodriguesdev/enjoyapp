import axios, { AxiosResponse } from 'axios';
import { put } from 'redux-saga/effects';

export function* asyncGetMessages(action: any) {

  console.log(action)

  try {
    const response: AxiosResponse = yield axios.get("/chat/" + action.payload.userId);

    yield put({
      type: "chat/SUCCESS_GETED_MESSAGES",
      payload: response.data.messages
    });

  } catch (error) {

    yield put({
      type: "chat/ERROR_GETED_MESSAGES",
      payload: { error: true }
    });
  }
}

// export function* asyncUpdateMessages(action) {

//     yield put({
//       type: "chat/SUCCESS_UPDATED_MESSAGES",
//       payload: message
//     });
// }