import axios, { AxiosResponse } from 'axios';
import { put, select } from 'redux-saga/effects';

export function* asyncGetProfile(action: any) {
  try {
    const response: AxiosResponse = yield axios.get("/profile/" + action.payload.id);

    yield put({
      type: "profile/SUCCESS_GETED_PROFILE",
      payload: response.data
    });
  } catch (error) {

    yield put({
      type: "profile/ERROR_GETED_PROFILE",
      payload: true
    });
  }
}

// bottom

export function* asyncAddUserFavorites({ payload }: any) {
  try {

    yield axios.post("/favorites", { userId: payload.userId });

    yield put({
      type: "profile/GETED_USERS_FAVORITES",
    });

    const state = yield select();

    yield put({
      type: "profile/SUCCESS_GETED_PROFILE",
      payload: { 
        ...state.profile.profile, 
        favorited: !state.profile.profile.favorited, 
      }
    });

  } catch (error) {
    console.log(error)
  }
}

export function* asyncAddUserHeart({ payload }: any) {
  try {

    yield axios.post("/heart", { userHeartId: payload.userHeartId });

    yield put({
      type: "profile/ADDED_USER_HEART",
    });

    yield put({
      type: "profile/GETED_USERS_HEART",
    });

  } catch (error) {

  }
}

export function* asyncRemoveUserHeart({ payload }: any) {
  try {

    yield axios.delete("/heart/" + payload.userHeartId);

    yield put({
      type: "profile/REMOVED_USER_HEART",
    });

    yield put({
      type: "profile/GETED_USERS_HEART",
    });

  } catch (error) {

  }
}

export function* asyncRemoveUserFavorites({ payload }: any) {
  try {

    yield axios.delete("/favorites/" + payload.userFavoritedId);

    yield put({
      type: "profile/REMOVED_USER_FAVORITES",
    });

    yield put({
      type: "profile/GETED_USERS_FAVORITES",
    });

  } catch (error) {

  }
}