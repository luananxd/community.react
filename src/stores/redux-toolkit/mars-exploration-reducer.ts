import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// Types
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type {
  MarsWeatherFilter,
  MarsPhotosFilter,
  MarsRoverPhoto,
} from '@/types/mars-exploration'
// Utils
import { get } from '@/utils/requests'

interface MarsExplorationState {
  filterWeather: MarsWeatherFilter
  filterPhotos: MarsPhotosFilter
  roverPhotos: MarsRoverPhoto[]
}

const initialState: MarsExplorationState = {
  filterWeather: {
    version: '1.0',
    feedtype: 'json',
    apiKey: import.meta.env.VITE_NASA_API_KEY as string,
  },
  filterPhotos: {
    sol: 1000,
    camera: 'FHAZ',
    page: 1,
    apiKey: import.meta.env.VITE_NASA_API_KEY as string,
  },
  roverPhotos: [],
}

// Selectors

export const selectWeatherFilter = (state: RootState) =>
  state.marsExploration.filterWeather

export const selectPhotosFilter = (state: RootState) =>
  state.marsExploration.filterPhotos

export const selectRoverPhotos = (state: RootState) =>
  state.marsExploration.roverPhotos

// Actions

export const fetchRoverPhotos = createAsyncThunk(
  'mars-exploration/fetchRoverPhotos',
  async (params: MarsPhotosFilter) => {
    const { data } = await get<MarsRoverPhoto[]>(
      'mars-photos/api/v1/rovers/curiosity/photos',
      { params },
    )
    return data
  },
)

// Reducer

const marsExplorationReducer = createSlice({
  name: 'mars-exploration',
  initialState,
  reducers: {
    updateWeatherFilter: (state, action: PayloadAction<MarsWeatherFilter>) => {
      state.filterWeather = action.payload
    },
    updatePhotosFilter: (state, action: PayloadAction<MarsPhotosFilter>) => {
      state.filterPhotos = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(
      fetchRoverPhotos.fulfilled,
      (state, action: PayloadAction<MarsRoverPhoto[]>) => {
        state.roverPhotos = [...state.roverPhotos, ...action.payload]
      },
    )
  },
})

export default marsExplorationReducer.reducer
export const { updatePhotosFilter, updateWeatherFilter } =
  marsExplorationReducer.actions
