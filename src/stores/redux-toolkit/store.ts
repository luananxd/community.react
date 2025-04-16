import { configureStore } from '@reduxjs/toolkit'
// Reducers
import counterReducer from './counter-reducer'
import marsExplorationReducer from './mars-exploration-reducer'
import pictureOfTheDayReducer from './picture-of-the-day-reducer'
import technologiesReducer from './technologies-reducer'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    marsExploration: marsExplorationReducer,
    pictureOfTheDay: pictureOfTheDayReducer,
    technologies: technologiesReducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
