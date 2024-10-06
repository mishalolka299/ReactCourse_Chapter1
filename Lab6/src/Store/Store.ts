import {  combineReducers, configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk';
import ToDoReducer from './State/Redusers/ToDoReducer/ToDoReducer';

export const rootReducer = combineReducers({
    ToDo: ToDoReducer
  });

  export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
