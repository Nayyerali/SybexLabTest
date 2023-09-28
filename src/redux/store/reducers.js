import {createReducer, combineReducers} from '@reduxjs/toolkit';
import {DemoReducer} from '../reducers/DemoReducer';

const appState = {
  name: 'SybexLabTest',
  url: '',
  version: '1.0.0',
};

const AppReducer = createReducer(appState, _ => {
  return appState;
});

const rootReducer = combineReducers({
  AppReducer: AppReducer,
  DemoReducer: DemoReducer,
});

export default rootReducer;
