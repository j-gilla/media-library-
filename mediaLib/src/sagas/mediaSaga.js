import { put, call } from 'redux-saga/effects';
import { flickrImages, shutterStockVideos } from '../Api/api';
import * as types from '../constants/actionTypes';


export function * searchMediaSaga({ payload }) {
  try {
    const videos = yield call(shutterStockVideos, payload);
    const images = yield call(flickrImages, payload);
    yeild [
      put({ type: types.SHUTTER_VIDEOS_SUCCESS, videos }),
      put({ type: types.SHUTTER_VIDEO, videos[0] }),
      put({ type: types.SHUTTER_IMAGES_SUCCESS, images }),
      put({ type: types.SHUTTER_VIDEOS_SUCCESS, images[0] }),
    ];
  } catch (error) {
      yield put({ type: 'SEARCH_MEDIA_ERROR', erro });
  }
}
