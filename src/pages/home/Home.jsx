import React from "react";
import "./home.css";
import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import { useData } from "../../context/DataContext";
import { useNavigate } from "react-router";
import Modal from "../../components/Modal/Modal";

const Home = () => {
  const { state, dispatch, isModal } = useData();
  const navigate = useNavigate();

  const filterData = state.selectGenre
    ? state.data.reduce(
        (acc, cur) =>
          cur.genre.includes(state.selectGenre) ? [...acc, cur] : acc,
        []
      )
    : [...state.data];

  const yearData = state.year
    ? filterData.filter(({ year }) => year === Number(state.year))
    : [...filterData];

  const ratingData = state.rating
    ? yearData.filter(({ rating }) => rating === Number(state.rating))
    : [...yearData];

  const final = state.search
    ? ratingData.filter(
        ({ title, cast, director }) =>
          title.toLowerCase().includes(state.search.toLowerCase()) ||
          cast.join("").toLowerCase().includes(state.search.toLowerCase()) ||
          director.toLowerCase().includes(state.search.toLowerCase())
      )
    : [...ratingData];

  return (
    <div className="home">
      
      <Filter />
      <div className="flexRow">
        {final.length !== 0 ? (
          final?.map((ele) => (
            <div
              key={ele.id}
              onClick={() => {
                navigate(`/movie/${ele.id}`);
              }}
            >
              <Card data={ele} />
            </div>
          ))
        ) : (
          <h3>No movies found</h3>
        )}
      </div>
    </div>
  );
};

export default Home;
