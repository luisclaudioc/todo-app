import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPictures, selectPictures } from "./picturesSlice";

export default function Picture() {

    const dispatch = useDispatch();
    const { pictures, picturesAreLoading, picturesHaveFailed } = useSelector(selectPictures);
    const [ pictureNumber, setPictureNumber ] = useState(0);

    useEffect(() => {
        dispatch(fetchPictures());
    }, [dispatch]);

    if (picturesAreLoading || picturesHaveFailed || !pictures || pictures.length === 0) {
        return <p>Loading picture</p>
    }

    const handleClick = (e) => {
        if (e.target.value === "left") {
            setPictureNumber(prev => (prev - 1 + pictures.length) % pictures.length);
        } else {
            setPictureNumber(prev => (prev + 1) % pictures.length);
        }
    }

    return (
        <div>
            <img className="Picture" src={pictures[pictureNumber].src.landscape} alt="background nature"/>
            <button className="Picture-btn left" value="left" onClick={handleClick}>{"\u25c0"}</button>
            <button className="Picture-btn right" value="right" onClick={handleClick}>{"\u25b6"}</button>
        </div>
    )

}