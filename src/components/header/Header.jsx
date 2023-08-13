import React from "react";
import "./header.css";
import { BiSearch } from "react-icons/bi";
import { useData } from "../../context/DataContext";
import { useNavigate } from "react-router";

const Header = () => {
  const { dispatch } = useData();
const navigate =useNavigate()
  return (
    <div>
      <div className="headerContainer">
        <h1  onClick={()=>navigate("/")}>IMDB</h1>
        <div className="searchBar">
          <em>
            <BiSearch />
          </em>
          <input
            type="text"
            placeholder="Search movies by title, cast and directors..."
            className="searchInput"
            onChange={(e) =>
              dispatch({ type: "SEARCH", payload: e.target.value })
            }
          />
        </div>
        <div className="headerNav">
          <div onClick={()=>navigate("/")}>Movies</div>
          <div onClick={()=>navigate("/watch")}>Watchlist</div>
          <div onClick={()=>navigate("/star")}>Started Movies</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
