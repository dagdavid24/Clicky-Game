import React from "react";
import "./AnimeCard.css";

const AnimeCard = (props) => {
    return (
        <div className="card" onClick={() => props.click(props.id)}>
            <img className="image" alt={props.breed} src={props.image} />
        </div>
    )
}

export default AnimeCard;