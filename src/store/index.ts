import {combineReducers, applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
// sagas
import rootSaga from './sagas';
// reducers
import home from './duck/home';
import profile from './duck/profile';
import contacts from './duck/contacts';
import chat from './duck/chat';

const saga = createSagaMiddleware();

const reducers = combineReducers({
   home,
   profile,
   contacts,
   chat,
});

const store = createStore(reducers, applyMiddleware(saga))

saga.run(rootSaga);

export default store;
