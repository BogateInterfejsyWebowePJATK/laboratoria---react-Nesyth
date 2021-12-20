import React from "react";
import '../App.css'
import StarRating from "./StarRating";
import ThumbRating from "./ThumbRating";

export default function Picture({picture}) {
    return (
        <div>
            <br></br>
            <img width="800px" height="auto" className={"picture_url"} variant={"bottom"} src={picture.url}/>
            <p>Title: {picture.title}</p>
            <p>Year: {picture.date.toString()}</p>
            <StarRating/>
            <ThumbRating />
        </div>
    );
}