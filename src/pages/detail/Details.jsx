import React from "react";
import "./detail.css";
import { useParams } from "react-router";
import { useData } from "../../context/DataContext";

const Details = () => {
  const { Id } = useParams();
  const { state, dispatch } = useData();

  const detail = state.data.find(({ id }) => id.toString() === Id);
  
  const watch = state.watchlist.filter((ele) => ele.id === detail.id);
 
  return (
    <div className="detailContainer">
      <div className="div">
        <img id="image" src={detail.imageURL} alt="" />
      </div>

      <div className="flexColumn">
        <h1>{detail.title}</h1>
        <div>{detail.summary}</div>
        <div>Year: {detail.year}</div>
        <div>Genre: {detail.genre.join(",")}</div>
        <div>Director: {detail.director}</div>
        <div>Writer: {detail.writer}</div>
        <div>Cast: {detail.cast.join(",")}</div>
        <button>Star</button>
        <button
          onClick={(e) => dispatch({ type: "ADD_WATCH", payload: detail })}
        >
       {watch.length === 0 ? "add to watchlist" : "Added to watchlist"}
        </button>
      </div>
    </div>
  );
};

export default Details;
