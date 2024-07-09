import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPictures, selectPictures } from "./picturesSlice";

export default function Picture() {

    const dispatch = useDispatch();
    console.log(useSelector(selectPictures)); //THIS IS WRONG

    useEffect(() => {
        dispatch(fetchPictures());
    }, [dispatch]);

    //console.log(pictures)

    return (
        <div className="Picture">
            <p>{0}</p>
        </div>
    )
}