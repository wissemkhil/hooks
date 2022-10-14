import React from "react";

const Rate = ({ rating, setRating }) => {
  const stars = (x) => {
    const starArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        starArray.push(
          <span style={{ color: "gold" }} key={i} onClick={() => setRating(i)}>
            &#9733;
          </span>
        );
      } else {
        starArray.push(
          <span style={{ color: "gold" }} key={i} onClick={() => setRating(i)}>
            &#9734;
          </span>
        );
      }
    }
    return starArray;
  };
  return <div className="ticket__rating">{stars(rating)}</div>;
};

Rate.defaultProps = {
  setRating: () => {},
};

export default Rate;
