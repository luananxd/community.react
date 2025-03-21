// Types
import type { Action } from '@/types/common'
import type { RootDispatch } from './store'
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

export const selectWeatherFilter = (state: any) =>
  state.marsExploration.filterWeather

export const selectPhotosFilter = (state: any) =>
  state.marsExploration.filterPhotos

export const selectRoverPhotos = (state: any) =>
  state.marsExploration.roverPhotos

// Actions

export const updateWeatherFilter = (value: MarsWeatherFilter) => {
  return {
    type: 'mars-exploration/updateWeatherFilter',
    payload: value,
  }
}

export const updatePhotosFilter = (value: MarsPhotosFilter) => {
  return {
    type: 'mars-exploration/updatePhotosFilter',
    payload: value,
  }
}

export const updateRoverPhotos = (value: MarsRoverPhoto[]) => {
  return {
    type: 'mars-exploration/updateRoverPhotos',
    payload: value,
  }
}

export const fetchRoverPhotos = (params: any) => {
  return async (dispatch: RootDispatch) => {
    const { data } = await get<MarsRoverPhoto[]>(
      'mars-photos/api/v1/rovers/curiosity/photos',
      {
        params,
      },
    )
    dispatch(updateRoverPhotos(data))
  }
}

// Reducer

const reducer = (
  state = initialState,
  action: Action,
): MarsExplorationState => {
  switch (action.type) {
    case 'mars-exploration/updateWeatherFilter':
      return {
        ...state,
        filterWeather: action.payload,
      }

    case 'mars-exploration/updatePhotosFilter':
      return {
        ...state,
        filterPhotos: action.payload,
      }

    case 'mars-exploration/updateRoverPhotos':
      return {
        ...state,
        roverPhotos: action.payload,
      }

    default:
      return state
  }
}

export default reducer
