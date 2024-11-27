import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
import { gadgetsReducer } from './gadgetsReducer';

const combinedReducers = combineReducers({
    auth: authReducer,
    gadgets: gadgetsReducer
})


export const store = configureStore({
    reducer: combinedReducers,
    devTools: true
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
