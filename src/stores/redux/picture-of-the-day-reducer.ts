// Types
import type { Action } from '@/types/common'
import type { RootDispatch } from './store'
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

export const selectPicture = (state: any) => state.pictureOfTheDay.picture

export const selectFilter = (state: any) => state.pictureOfTheDay.filter

// Actions

export const updatePicture = (value: PictureOfTheDay) => {
  return {
    type: 'picture-of-the-day/updatePicture',
    payload: value,
  }
}

export const updateFilter = (value: PictureOfTheDayFilter) => {
  return {
    type: 'picture-of-the-day/updateFilter',
    payload: value,
  }
}

export const fetchRoverPhotos = (params: any) => {
  return async (dispatch: RootDispatch) => {
    const { data } = await get<any>('planetary/apod', {
      params,
    })
    dispatch(updatePicture(data))
  }
}

// Reducer

const reducer = (
  state = initialState,
  action: Action,
): PictureOfTheDayState => {
  switch (action.type) {
    case 'mars-exploration/updatePicture':
      return {
        ...state,
        picture: action.payload,
      }

    case 'mars-exploration/updateFilter':
      return {
        ...state,
        filter: action.payload,
      }

    default:
      return state
  }
}

export default reducer
