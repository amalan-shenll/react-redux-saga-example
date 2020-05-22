import { takeEvery } from 'redux-saga/effects';
import { FETCH_COUNTRIES } from '../const/ActionTypes';
import { fetchContryAsync } from './countrySagas';

export default function* rootSaga() {
  yield takeEvery(FETCH_COUNTRIES, fetchContryAsync);
}