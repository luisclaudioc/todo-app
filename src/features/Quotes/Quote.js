import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRandomQuote, selectQuote } from "./quotesSlice";


export default function Quote() {

    const dispatch = useDispatch();
    const { quote, quoteIsLoading, quoteHasFailed } = useSelector(selectQuote);

    useEffect(() => {
        dispatch(fetchRandomQuote());
    }, [dispatch]);

    if (quoteIsLoading) {
        return (
            <div className="Quote">
                <p>Loading...</p>
            </div>
        );
    }

    if (quoteHasFailed) {
        return (
            <div className="Quote">
                <p>No quote available.</p>
            </div>
        );
    }

    return (
        <div className="Quote">
            <p>{quote.quote}</p>
        </div>
    )
}