import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRandomQuote, selectQuote } from "./quotesSlice";


export default function Quote() {

    const dispatch = useDispatch();
    const { quote, isLoading, hasFailed } = useSelector(selectQuote);

    useEffect(() => {
        dispatch(fetchRandomQuote());
    }, [dispatch]);

    if (isLoading) {
        return (
            <div className="Quote">
                <p>Loading...</p>
            </div>
        );
    }

    if (hasFailed) {
        return (
            <div className="Quote">
                <p>Quote has failed.</p>
            </div>
        );
    }

    return (
        <div className="Quote">
            <p>{quote.quote}</p>
        </div>
    )
}