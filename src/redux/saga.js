import { takeLatest, all, put, fork, call } from 'redux-saga/effects';
import { fetchGallery, fetchYoutube, fetchMembers } from './api';
import * as types from './actionType';
// members
export function* returnMembers(action) {
	try {
		const response = yield call(fetchMembers);
		yield put({ type: types.MEMBERS.success, payload: response.data.members });
	} catch (err) {
		yield put({ type: types.MEMBERS.error, payload: err });
	}
}

export function* callMembers() {
	yield takeLatest(types.MEMBERS.start, returnMembers);
}

// youtube
export function* returnYoutube(action) {
	try {
		const response = yield call(fetchYoutube);
		yield put({ type: types.YOUTUBE.success, payload: response.data.items });
	} catch (err) {
		yield put({ type: types.YOUTUBE.error, payload: err });
	}
}

export function* callYoutube() {
	yield takeLatest(types.YOUTUBE.start, returnYoutube);
}
// gallery
export function* returnGallery(action) {
	try {
		const response = yield call(fetchGallery, action.opt);
		yield put({
			type: types.GALLERY.success,
			payload: response.data.photos.photo,
		});
	} catch (err) {
		yield put({ type: types.GALLERY.error, payload: err });
	}
}

export function* callGallery() {
	yield takeLatest(types.GALLERY.start, returnGallery);
}

// saga
export default function* rootSaga() {
	yield all([fork(callMembers), fork(callYoutube), fork(callGallery)]);
}
