import { call, put } from 'redux-saga/effects';
import {
  requestCountry,
  requestCountrySuccess,
  requestCountryError
} from '../actions/countryActions';

export function* fetchContryAsync() {
  try {
    yield put(requestCountry());
    const data = yield call(() => {
      return fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json());
    })
    yield put(requestCountrySuccess(data));
  } catch(error) {
    yield put(requestCountryError());
  }
}