import { ajax } from '../helpers'

export const DETAILS_RECEIVED = 'DETAILS_RECEIVED'
export function detailsReceived(details) {
  return {
    type: DETAILS_RECEIVED,
    details
  };
}
