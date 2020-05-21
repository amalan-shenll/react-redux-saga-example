import { REQUEST_COUNTRIES, RECEIVED_COUNTRIES, ERROR_COUNTRIES } from '../const/ActionTypes';

const countryReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_COUNTRIES:
      return Object.assign({}, state, {
        loading: true
      });
    case RECEIVED_COUNTRIES:
      return Object.assign({}, state, {
        loading: false,
        countries: action.countries
      });
    case ERROR_COUNTRIES:
      return Object.assign({}, state, {
        loading: true,
        error: true
      });
    default:
      return state;
  }
}

export default countryReducer;