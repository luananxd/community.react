import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
// Reduces
import marsExplorationReducer from './mars-exploration-reducer'
import counterReducer from './counter-reducer'

const rootReducer = combineReducers({
  marsExploration: marsExplorationReducer,
  counter: counterReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
