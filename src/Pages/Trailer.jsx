import React from "react";
import { useParams } from "react-router-dom";
const Trailler = (props) => {
  const { movies } = props;
  const { id } = useParams();

  const movie = movies.find((el) => el.id === +id);
  console.log(movie);
  console.log(movies);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={movie.trailler}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Trailler;
