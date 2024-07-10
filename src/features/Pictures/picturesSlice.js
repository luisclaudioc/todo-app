import { createSlice } from "@reduxjs/toolkit";
import { createClient } from 'pexels';

export const picturesSlice = createSlice({
    name: 'picture',
    initialState: {
        pictures: [],
        picturesAreLoading: false,
        picturesHaveFailed: false,
    },
    reducers: {
        fetchPicturesStart: (state, action) => {
            state.picturesAreLoading = true;
            state.picturesHaveFailed = false;
        },
        fetchPicturesSuccess: (state, action) => {
            state.picturesAreLoading = false;
            state.picturesHaveFailed = false;
            state.pictures = action.payload;
        },
        fetchPicturesFailure: (state, action) => {
            state.picturesAreLoading = false;
            state.picturesHaveFailed = true;
        }
    }
});

export const fetchPictures = () => async (dispatch) => {
    dispatch(fetchPicturesStart());
    try {
        const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);
        const query = 'sky nature';
        const orientation = 'landscape';
        const size = "large";
        
        const result = await client.photos.search({ query, orientation, size, per_page: 10 }).then(photos => photos.photos);
       
        dispatch(fetchPicturesSuccess(result));
    } catch (error) {
        dispatch(fetchPicturesFailure(error.message));
    }
};

export const selectPictures = (state) => state.picture;
export const { fetchPicturesStart, fetchPicturesSuccess, fetchPicturesFailure } = picturesSlice.actions;
export default picturesSlice.reducer;