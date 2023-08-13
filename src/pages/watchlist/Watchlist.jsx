import React from "react";
import "./watchlist.css";
import { useData } from "../../context/DataContext";
import { useNavigate } from "react-router";
import Card from "../../components/card/Card";

const Watchlist = () => {
  const { state } = useData();
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Watchlist</h1>
      <div className="flexRow">
        {state.watchlist.length === 0 ? (
          <h3>Watchlist is empty</h3>
        ) : (
          state.watchlist.map((ele) => (
            <div
              key={ele.id}
              onClick={() => {
                navigate(`/movie/${ele.id}`);
              }}
            >
              <Card data={ele} flag={true} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Watchlist;
