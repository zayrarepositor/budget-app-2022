import { useState, useEffect } from "react";

const Filters = ({ filter, setFilter }) => {
  return (
    <div className="filters shadow container">
      <form>
        <div className="modalinput">
          <label>Filter</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">--all expenses--</option>
            <option value="leisure">leisure</option>
            <option value="savings">savings</option>
            <option value="house">house</option>
            <option value="health">health</option>
            <option value="food">food</option>
            <option value="suscriptions">suscriptions</option>
            <option value="education">education</option>
            <option value="pet">pet</option>
            <option value="rent">rent</option>
            <option value="other">other expenses</option>
            <option value="services">basic services</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filters;
