import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// Types
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type {
  MarsWeatherFilter,
  MarsPhotosFilter,
  MarsRoverPhoto,
  MarsWeather,
} from '@/types/mars-exploration'
// Utils
import { get } from '@/utils/requests'

interface MarsExplorationState {
  filterWeather: MarsWeatherFilter
  filterPhotos: MarsPhotosFilter
  roverPhotos: MarsRoverPhoto[]
  marsWeather: MarsWeather | null
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
  marsWeather: null,
}

// Selectors

export const selectWeatherFilter = (state: RootState) =>
  state.marsExploration.filterWeather

export const selectPhotosFilter = (state: RootState) =>
  state.marsExploration.filterPhotos

export const selectRoverPhotos = (state: RootState) =>
  state.marsExploration.roverPhotos

export const selectMarsWeather = (state: RootState) =>
  state.marsExploration.marsWeather

// Actions

export const fetchRoverPhotos = createAsyncThunk(
  'mars-exploration/fetchRoverPhotos',
  async (params: MarsPhotosFilter) => {
    const { data } = await get<{ photos: MarsRoverPhoto[] }>(
      'mars-photos/api/v1/rovers/curiosity/photos',
      { params },
    )
    return data.photos
  },
)

export const fetchMarsWeather = createAsyncThunk(
  'mars-exploration/fetchMarsWeather',
  async (params: MarsWeatherFilter) => {
    const { data } = await get<MarsWeather>('insight_weather/', {
      params,
    })
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
    builder
      .addCase(
        fetchRoverPhotos.fulfilled,
        (state, action: PayloadAction<MarsRoverPhoto[]>) => {
          state.roverPhotos = action.payload
        },
      )
      .addCase(
        fetchMarsWeather.fulfilled,
        (state, action: PayloadAction<MarsWeather>) => {
          state.marsWeather = action.payload
        },
      )
  },
})

export default marsExplorationReducer.reducer
export const { updatePhotosFilter, updateWeatherFilter } =
  marsExplorationReducer.actions
