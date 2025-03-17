import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface State {
  counter: number
}

const initialState: State = {
  counter: 0,
}

const counterReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<number>) => {
      state.counter = action.payload
    },
    reset: state => {
      state.counter = 0
    },
  },
})

export const { update, reset } = counterReducer.actions
export default counterReducer.reducer
