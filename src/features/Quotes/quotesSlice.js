
import { createSlice } from "@reduxjs/toolkit";

const QUOTE_API_URL = 'https://api.api-ninjas.com/v1/quotes?category=inspirational';

export const quotesSlice = createSlice({
    name: 'quotes',
    initialState: {
        quote: {},
        quoteIsLoading: false,
        quoteHasFailed: false,
    },
    reducers: {
        fetchQuoteStart: (state, action) => {
            state.quoteIsLoading = true;
            state.quoteHasFailed = false;
        },
        fetchQuoteSuccess: (state, action) => {
            state.quoteIsLoading = false;
            state.quoteHasFailed = false;
            state.quote = action.payload;
        },
        fetchQuoteFailure: (state, action) => {
            state.quoteIsLoading = false;
            state.quoteHasFailed = true;
        },
    }
});

export const fetchRandomQuote = () => async (dispatch) => {
    dispatch(fetchQuoteStart());
    try {
        const response = await fetch(QUOTE_API_URL, {
            method: 'GET',
            headers: {
                'X-Api-Key': process.env.REACT_APP_QUOTE_API_KEY,
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Error: Luis ${response.statusText}`);
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