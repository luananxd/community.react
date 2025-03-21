import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// Types
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type {
  PictureOfTheDay,
  PictureOfTheDayFilter,
} from '@/types/picture-of-the-day'
// Utils
import { get } from '@/utils/requests'
import { getDateStringFromDate } from '@/utils/helpers'

interface PictureOfTheDayState {
  picture: PictureOfTheDay | null
  filter: PictureOfTheDayFilter
}

const initialState: PictureOfTheDayState = {
  picture: null,
  filter: {
    date: getDateStringFromDate(new Date()),
    apiKey: import.meta.env.VITE_NASA_API_KEY as string,
  },
}

// Selectors

export const selectPicture = (state: RootState) => state.pictureOfTheDay.picture

export const selectFilter = (state: RootState) => state.pictureOfTheDay.filter

// Actions

export const fetchPicture = createAsyncThunk(
  'picture-of-the-day/fetchPicture',
  async (params: any) => {
    const { data } = await get<any>('planetary/apod', {
      params,
    })
    return data
  },
)

// Reducer

const pictureOfTheDayReducer = createSlice({
  name: 'picture-of-the-day',
  initialState,
  reducers: {
    updatePicture: (state, action: PayloadAction<PictureOfTheDay>) => {
      state.picture = action.payload
    },
    updateFilter: (state, action: PayloadAction<PictureOfTheDayFilter>) => {
      state.filter = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(
      fetchPicture.fulfilled,
      (state, action: PayloadAction<PictureOfTheDay>) => {
        state.picture = action.payload
      },
    )
  },
})

export default pictureOfTheDayReducer.reducer
export const { updatePicture } = pictureOfTheDayReducer.actions
