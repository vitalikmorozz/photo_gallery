import {
    ADD_IMAGE,
    FETCH_START,
    FETCH_DONE,
    FETCH_ERROR,
    CLEAR_GALLERY,
} from '../types/images';

export const addImage = (image) => ({
    type: ADD_IMAGE,
    payload: {
        image,
    },
});

export const clearGallery = () => ({
    type: CLEAR_GALLERY,
});

export const fetchStart = () => ({
    type: FETCH_START,
});

export const fetchDone = () => ({
    type: FETCH_DONE,
});

export const fetchError = (error) => ({
    type: FETCH_ERROR,
    payload: {
        error,
    },
});

export const fetchImages = (per_page, page = 1) => async (dispatch) => {
    try {
        dispatch(fetchStart());
        const data = await fetch(
            `https://api.unsplash.com/photos/?per_page=${per_page}&page=${page}&order_by=popular&client_id=`,
        );
        const json = await data.json();
        json.forEach((item) => dispatch(addImage(item)));
        dispatch(fetchDone());
    } catch (err) {
        dispatch(fetchError(err));
    }
};
