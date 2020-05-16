import {combineReducers, applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
// sagas
import rootSaga from './sagas';
// reducers
import profile from './duck/profile';
import contacts from './duck/contacts';
import chat from './duck/chat';

const saga = createSagaMiddleware();

const reducers = combineReducers({
   profile,
   contacts,
   chat,
});

const store = createStore(reducers, applyMiddleware(saga))

saga.run(rootSaga);

export default store;
