import { createSlice } from "@reduxjs/toolkit";


const API_URL = 'https://api.quotable.io/quotes/random?tags=famous-quotes';

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
        // Simulate fetching from an API
        const mockQuote = {
            text: "The way to get started is to quit talking and begin doing.",
            author: "Walt Disney"
        };
        dispatch(fetchQuoteSuccess(mockQuote));
    } catch (error) {
        dispatch(fetchQuoteFailure(error.message));
    }
};

export const selectQuote = (state) => state.quotes;
export const { fetchQuoteStart, fetchQuoteSuccess, fetchQuoteFailure } = quotesSlice.actions;
export default quotesSlice.reducer;