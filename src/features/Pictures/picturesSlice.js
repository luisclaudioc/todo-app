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
            console.log(state.pictures)
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
        const client = createClient('E9stndDRjlQ5B0V2IqUwIFSUnE8p2loMVmMIpmbeum1w35YD2VQ2i4bI');
        const query = 'Nature';

        const result = await client.photos.search({ query, per_page: 4 }).then(photos => photos.photos);
        
        dispatch(fetchPicturesSuccess(result));
    } catch (error) {
        dispatch(fetchPicturesFailure(error.message));
    }
};


export const selectPictures = (state) => state.pictures;
export const { fetchPicturesStart, fetchPicturesSuccess, fetchPicturesFailure } = picturesSlice.actions;
export default picturesSlice.reducer;