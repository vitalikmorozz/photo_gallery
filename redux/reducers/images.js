import {
    ADD_IMAGE,
    FETCH_START,
    FETCH_DONE,
    FETCH_ERROR,
    CLEAR_GALLERY,
} from '../types/images';

const initialState = {
    images: [],
    loading: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_IMAGE:
            return {
                images: [...state.images, action.payload.image],
                loading: state.loading,
                error: state.error,
            };

        case CLEAR_GALLERY:
            return {
                images: [],
                loading: false,
                error: null,
            };

        case FETCH_START:
            return {
                images: state.images,
                loading: true,
                error: state.error,
            };

        case FETCH_DONE:
            return {
                images: state.images,
                loading: false,
                error: state.error,
            };

        case FETCH_ERROR:
            return {
                images: state.images,
                loading: false,
                error: action.payload.error,
            };

        default:
            return state;
    }
};

export default reducer;
