import React from "react";

export default function PictureSelector({ side }) {
    return (
        <div>
            <button className="PictureSelector">{side === "left" ? "\u25c0" : "\u25b6"}</button>
        </div>
    )
}