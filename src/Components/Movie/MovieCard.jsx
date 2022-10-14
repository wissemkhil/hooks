import React from "react";
import Rate from "../Rate";
import { Link } from "react-router-dom";
const MovieCard = ({
  movie: { title, description, posterUrl, rating, id },
}) => {
  console.log("id:", id);
  return (
    <div className="container">
      <div className="hero-container">
        <div className="main-container">
          <div className="poster-container">
            <a href="#">
              <img src={posterUrl} className="poster" />
            </a>
          </div>
          <div className="ticket-container">
            <div className="ticket__content">
              <h4 className="ticket__movie-title">{title}</h4>
              <p className="ticket__movie-description">{description}</p>

              <Rate rating={rating} />

              <div className="btn">
                <Link to={`/trailler/${id}`}>show trailler</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
