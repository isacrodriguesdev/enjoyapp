import { takeLatest, all } from 'redux-saga/effects';
// actions saga
import * as home from './saga/home.saga';
import * as profile from './saga/profile.saga';
import * as contacts from './saga/contacts.saga';
import * as chat from './saga/chat.saga';

export default function* root() {
  yield all([
    // home
    takeLatest("home/ASYNC_REQUEST_GETED_USERS", home.asyncGetHomeUsers),
    // profile
    takeLatest("profile/ASYNC_REQUEST_GETED_PROFILE", profile.asyncGetProfile),
    takeLatest("profile/ASYNC_ADDED_USER_FAVORITES", profile.asyncAddUserFavorites),
    takeLatest("profile/ASYNC_REMOVED_USER_FAVORITES", profile.asyncRemoveUserFavorites),
    takeLatest("profile/ASYNC_REMOVED_USER_HEART", profile.asyncRemoveUserHeart), 
    // contacts
    takeLatest("contacts/ASYNC_GETED_USERS_FAVORITES", contacts.asyncGetUsersFavorites),
    takeLatest("contacts/ASYNC_GETED_USERS_MATCHS", contacts.asyncGetUsersMatchs),
    // chat
    takeLatest("chat/ASYNC_REQUEST_GETED_MESSAGES", chat.asyncGetMessages),
  ]);
};