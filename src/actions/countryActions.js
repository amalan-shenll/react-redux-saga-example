import {
  FETCH_COUNTRIES,
  REQUEST_COUNTRIES,
  RECEIVED_COUNTRIES,
  ERROR_COUNTRIES
} from '../const/ActionTypes';

export const requestCountry = () => {
  return { type: REQUEST_COUNTRIES };
};

export const requestCountrySuccess = (data) => {
  return { type: RECEIVED_COUNTRIES, countries: data };
};

export const requestCountryError = () => {
  return { type: ERROR_COUNTRIES };
};

export const fetchCountry = () => {
  return { type: FETCH_COUNTRIES };
};

