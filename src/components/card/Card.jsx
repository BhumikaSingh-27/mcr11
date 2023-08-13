import React from "react";
import "./card.css";
import { useData } from "../../context/DataContext";

const Card = ({ data, flag,code}) => {
  const { dispatch, state } = useData();

  const watch = state.watchlist.filter((ele) => ele.id === data.id);
  const star = state.starred.filter((ele) => ele.id === data.id);

  return (
    <div className="cardContainer">
      <div className="imgContainer">
        <img id="img" src={data.imageURL} alt="" />
      </div>
      <div className="textContainer">
        <h2>{data.title}</h2>
        <div className="smallFont displayFlexJust">{data.summary}</div>
       {code ? <button
            onClick={(e) => {
              dispatch({ type: "REMOVE_STAR", payload: data.id });
              e.stopPropagation();
            }}
          >
            Unstar
          </button> : <button
          onClick={(e) => {
            dispatch({ type: "ADD_STAR", payload: data });
            e.stopPropagation();
          }}
        >
          {star.length === 0 ? "Star" : "Starred"}
        </button>}
        {flag ? (
          <button
            onClick={(e) => {
              dispatch({ type: "REMOVE_WATCH", payload: data.id });
              e.stopPropagation();
            }}
          >
            remove from watchlist
          </button>
        ) : (
          <button
            onClick={(e) => {
              dispatch({ type: "ADD_WATCH", payload: data });
              e.stopPropagation();
            }}
          >
            {" "}
            {watch.length === 0 ? "add to watchlist" : "Added to watchlist"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
