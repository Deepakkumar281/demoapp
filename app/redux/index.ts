import { combineReducers } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';
import userReducer from "./user/reducer";
import screenReducer from './screen/reducer';

const rootReducers = combineReducers({
    userReducer,
    screenReducer
})

export type RootState = ReturnType<typeof rootReducers>
export type UserState = ReturnType<typeof userReducer>
export type ScreenReduxState = ReturnType<typeof screenReducer>

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export default rootReducers