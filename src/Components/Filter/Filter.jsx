import React from "react";
const Filter = (props) => {
  const handleChange = (e) => {
    props.setText(e.target.value);
  };
  return (
    <div className="filter">
      <input
        className="input"
        type="text"
        value={props.text}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default Filter;
