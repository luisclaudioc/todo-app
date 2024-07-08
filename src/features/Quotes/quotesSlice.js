
import { createSlice } from "@reduxjs/toolkit";


const API_URL = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
const API_KEY = 'D4qzIBwPLLokshnJ9Dp1ew==jFqsRVIJ3k8fjrWq'


export const quotesSlice = createSlice({
    name: 'quotes',
    initialState: {
        quote: {},
        isLoading: false,
        hasFailed: false,
    },
    reducers: {
        fetchQuoteStart: (state, action) => {
            state.isLoading = true;
            state.hasFailed = false;
        },
        fetchQuoteSuccess: (state, action) => {
            state.isLoading = false;
            state.hasFailed = false;
            state.quote = action.payload;
        },
        fetchQuoteFailure: (state, action) => {
            state.isLoading = false;
            state.hasFailed = true;
        },
    }
});

export const fetchRandomQuote = () => async (dispatch) => {
    dispatch(fetchQuoteStart());
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'X-Api-Key': API_KEY,
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        dispatch(fetchQuoteSuccess(result[0]));
    } catch (error) {
        dispatch(fetchQuoteFailure(error.message));
    }
};

export const selectQuote = (state) => state.quotes;
export const { fetchQuoteStart, fetchQuoteSuccess, fetchQuoteFailure } = quotesSlice.actions;
export default quotesSlice.reducer;