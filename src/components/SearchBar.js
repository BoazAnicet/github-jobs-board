import React from "react";
import icon_search from "../assets/desktop/icon-search.svg";
import icon_location from "../assets/desktop/icon-location.svg";

const SearchBar = ({
  handleSubmit,
  description,
  setDescription,
  location,
  setLocation,
  fullTime,
  setFullTime,
}) => {
  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <div className="input-group" id="search">
          <img src={icon_search} alt="Search" />
          <input
            type="text"
            placeholder="Filter by title, companies, expertise…"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="input-group" id="location">
          <img src={icon_location} alt="Location" />
          <input
            type="text"
            placeholder="Filter by location…"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="input-group" id="full-time">
          <label className="checkbox-container">
            <input type="checkbox" value={fullTime} onChange={(e) => setFullTime(!fullTime)} />
            <span className="checkmark"></span>
            Full Time
          </label>
          <button type="submit">Search</button>
        </div>
      </form>

      {/* <form onSubmit={handleSubmit}>
        <div className="input-group" id="search">
          <img src={icon_search} alt="Search" />
          <input
            type="text"
            placeholder="Filter by title, companies, expertise…"
            value={text_search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="input-group" id="location">
          <img src={icon_location} alt="Location" />
          <input
            type="text"
            placeholder="Filter by location…"
            value={text_location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="input-group" id="full-time">
          <div>
            <input
              type="checkbox"
              value={fullTimeOnly}
              onChange={(e) => setFullTimeOnly(!fullTimeOnly)}
            />
          </div>
          <label>Full Time Only</label>
          <button type="submit">Search</button>
        </div>
      </form> */}
    </div>
  );
};

export default SearchBar;
