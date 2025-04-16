import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// Types
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type {
  TechnologiesFilter,
  Patent,
  PatentData,
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

export const selectTechnologiesFilter = (state: RootState) =>
  state.technologies.filter

export const selectPatents = (state: RootState) => state.technologies.patents

// Actions

export const fetchPatents = createAsyncThunk(
  'technologies/fetchPatents',
  async (params: TechnologiesFilter) => {
    const { data } = await get<PatentData>('techtransfer/patent/', {
      params,
    })
    const _data: Patent[] = data.results.map(item => {
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
    return {
      data: _data,
      meta: {
        page: data.page + 1,
        perPage: data.perpage,
        total: data.total,
      },
    }
  },
)

// Reducer

const marsExplorationReducer = createSlice({
  name: 'technologies',
  initialState,
  reducers: {
    updateTechnologiesFilter: (
      state,
      action: PayloadAction<TechnologiesFilter>,
    ) => {
      state.filter = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(
      fetchPatents.fulfilled,
      (state, action: PayloadAction<{ data: Patent[] }>) => {
        state.patents = action.payload.data
      },
    )
  },
})

export default marsExplorationReducer.reducer
export const { updateTechnologiesFilter } = marsExplorationReducer.actions
