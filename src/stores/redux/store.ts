import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
// Reduces
import counterReducer from './counter-reducer'
import marsExplorationReducer from './mars-exploration-reducer'
import pictureOfTheDayReducer from './picture-of-the-day-reducer'

const rootReducer = combineReducers({
  counter: counterReducer,
  marsExploration: marsExplorationReducer,
  pictureOfTheDay: pictureOfTheDayReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
