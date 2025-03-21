import { configureStore } from '@reduxjs/toolkit'
// Reducers
import counterReducer from './counter-reducer'
import marsExplorationReducer from './mars-exploration-reducer'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    marsExploration: marsExplorationReducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
