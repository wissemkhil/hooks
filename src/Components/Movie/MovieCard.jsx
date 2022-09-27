import React from "react";
import Rate from "../Rate";
const MovieCard = ({ movie: { title, description, posterUrl, rating } }) => {
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
              <p className="ticket__rating">
                <Rate rating={rating} />
              </p>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default MovieCard;
