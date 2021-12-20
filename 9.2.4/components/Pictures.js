import React from "react";
import PicturesJson from '../data/data.json'
import Picture from "./Picture";
import { useState } from 'react';

export default function Pictures() {
    let picturesJson = PicturesJson.map(picture => {
        return {
            ...picture
        }
    })
    
    const [pictures, setPictures] = useState(picturesJson);

    const sortByDate = () => {
        let newPictures = [...pictures];
        newPictures = newPictures.sort((a, b) => a.date - b.date);
        setPictures(newPictures);
    }

    const sortByTitle = () => {
        let newPictures = [...pictures];
        newPictures = newPictures.sort((a, b) => a.title.localeCompare(b.title));
        setPictures(newPictures);
    }

    const sortRandom = () => {
        let newPictures = [...pictures];
        for (let i = 0; i < newPictures.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            [newPictures[j], newPictures[i]] = [newPictures[i], newPictures[j]];
        }
        setPictures(newPictures)
    }

    const remove = (id) => {
        let newPictures = [...pictures];
        newPictures = newPictures.filter(picture => picture.id == id);
        setPictures(newPictures);
    }

    return (
        <div>
            <button onClick={() => sortByDate()}>sort by date</button>
            <button onClick={() => sortByTitle()}>sort by title</button>
            <button onClick={() => sortRandom()}>sort by random</button>
            {pictures.map((picture, i) => {
                return (
                    <div>
                        <Picture picture={picture}/>
                        <br></br>
                        <button onClick={() => remove(picture.i)}>Remove</button>
                        <hr></hr>
                    </div>
                )
            })}
        </div>
    );
}