// Types
import type { Action } from '@/types/common'
import type { RootDispatch } from './store'
import type {
  TechnologiesFilter,
  Patent,
  PatentRAW,
} from '@/types/technologies'
// Utils
import { get } from '@/utils/requests'

interface TechnologiesState {
  filter: TechnologiesFilter
  patents: Patent[]
}

const initialState: TechnologiesState = {
  filter: {
    page: 1,
    perPage: 10,
    apiKey: import.meta.env.VITE_NASA_API_KEY as string,
  },
  patents: [],
}

// Selectors

export const selectTechnologiesFilter = (state: any) =>
  state.technologies.filter

export const selectPatents = (state: any) => state.technologies.patents

// Actions

export const updateTechnologiesFilter = (value: TechnologiesFilter) => {
  return {
    type: 'technologies/updateTechnologiesFilter',
    payload: value,
  }
}

export const updatePatents = (value: Patent[]) => {
  return {
    type: 'technologies/updatePatents',
    payload: value,
  }
}

export const fetchRoverPhotos = (params: any) => {
  return async (dispatch: RootDispatch) => {
    const { data } = await get<PatentRAW[]>(
      'mars-photos/api/v1/rovers/curiosity/photos',
      {
        params,
      },
    )

    const _data: Patent[] = data.map(item => {
      return {
        id: item[0],
        number: item[1],
        title: item[2],
        description: item[3],
        type: item[5],
        tag: item[9],
        url: item[10],
      }
    })

    dispatch(updatePatents(_data))
  }
}

// Reducer

const reducer = (state = initialState, action: Action): TechnologiesState => {
  switch (action.type) {
    case 'technologies/updateTechnologiesFilter':
      return {
        ...state,
        filter: action.payload,
      }

    case 'technologies/updatePatents':
      return {
        ...state,
        patents: action.payload,
      }

    default:
      return state
  }
}

export default reducer
