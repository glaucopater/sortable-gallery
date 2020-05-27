import React from "react";

const ColsSelector = props => {
  return (
    <label>
      <select
        onChange={ev => props.onColsSelect(ev.target.value)}
        defaultValue={props.cols}
      >
        <option value="1">1 column</option>
        <option value="2">2 column</option>
        <option value="3">3 column</option>
        <option value="4">4 column</option>
        <option value="5">5 column</option>
        <option value="6">6 column</option>
        <option value="7">7 column</option>
        <option value="8">8 column</option>
      </select>
    </label>
  );
};

export default ColsSelector;
