import React from "react";
import { filterOptions, filterRestrictions } from "../../utils/filter.utils";

const Filter = ({ ...inputProps }) => {
  return (
    <form className="filter row-spaced-between">
      <span>Where</span>
      <select {...inputProps} id="selectedOption">
        <option value="" />
        {filterOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <select id="restriction" {...inputProps}>
        <option value="" />
        <option value={filterRestrictions.includes}>includes</option>
        <option value={filterRestrictions.equals}>equals</option>
      </select>
      <input id="inputValue" {...inputProps} />
    </form>
  );
};

export default Filter;
