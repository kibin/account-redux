import { createReducer } from 'helpers'
import {
  DETAILS_RECEIVED
} from './actions'

const initialState = {
  details: {},
};

const reducers = {
  [DETAILS_RECEIVED]: (state, { details }) => ({ details }),
};

export const detailsReducer = createReducer(reducers, initialState)
