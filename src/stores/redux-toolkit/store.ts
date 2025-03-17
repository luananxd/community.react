import { configureStore } from '@reduxjs/toolkit'
// Reducers
import counterReducer from './counter-reducer'

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export default store
