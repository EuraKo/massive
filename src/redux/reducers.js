import { combineReducers } from 'redux';
import * as types from './actionType';

const membersReducer = (state = { members: [] }, action) => {
	switch (action.type) {
		case types.MEMBERS.start:
			return { ...state };
		case types.MEMBERS.success:
			return { ...state, members: action.payload };
		case types.MEMBERS.error:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

const youtubeReducer = (state = { youtube: [] }, action) => {
	switch (action.type) {
		case types.YOUTUBE.start:
			return { ...state };
		case types.YOUTUBE.success:
			return { ...state, youtube: action.payload };
		case types.YOUTUBE.error:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

const galleryReducer = (state = { gallery: [] }, action) => {
	switch (action.type) {
		case types.GALLERY.start:
			return { ...state };
		case types.GALLERY.success:
			return { ...state, gallery: action.payload };
		case types.GALLERY.error:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

const reducers = combineReducers({
	membersReducer,
	youtubeReducer,
	galleryReducer,
});

export default reducers;
