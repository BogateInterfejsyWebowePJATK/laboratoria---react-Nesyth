import '../App.css';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

function StarRating() {
    const [rating, setRating] = useState(0);
    const [ratings, setRatings] = useState([]);

    function fillArray(size, funcValue) {
        return [...Array(size)].map(_ => funcValue());
    }

    function average(arr) {
        if (!arr.length) {
            return 0;
        }
        return arr.reduce((prev, curr) => prev + curr) / arr.length;
    }

    function Star({index, value, rating, setRating}) {
        return <FaStar color={value ? "red" : "#aaa"} onClick={() => setRating(index + 1)}/>
    }

    return (
        <div className="StarRating">
            <div><br></br>
                {
                    fillArray(rating, () => 1).concat(fillArray(5 - rating, () => 0)).map((value, index) =>
                        <Star {...{value, index, setRating}} />
                    )}
            </div>
            <div>Score: {average(ratings)}</div>
            <button onClick={() => {
                ratings.push(rating);
                setRating(0);
            }}>
                Rate
            </button>
        </div>
    )
}

export default StarRating;