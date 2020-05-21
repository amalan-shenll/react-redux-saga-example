import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_COUNTRIES } from '../const/ActionTypes';
import {
  requestCountry,
  requestCountrySuccess,
  requestCountryError
} from '../actions/countryActions';

export function* watchFetchCountry() {
  yield takeEvery(FETCH_COUNTRIES, fetchContryAsync);
}

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