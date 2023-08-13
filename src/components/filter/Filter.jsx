import React from "react";
import { useData } from "../../context/DataContext";
import "./filter.css";

const Filter = () => {
  const {
    state: { data, selectGenre, year, rating },
    dispatch,
    isModal,
    setIsModal,
  } = useData();
  const genre = data.reduce((acc, cur) => {
    return [...acc, ...cur.genre];
  }, []);
  const genreList = genre.reduce((acc, cur) => {
    if (acc.includes(cur)) {
      return acc;
    }
    return [...acc, cur];
  }, []);

  return (
    <div className="filter">
      <h2>Movie</h2>
      <select
        value={selectGenre}
        onChange={(e) =>
          dispatch({ type: "SET_GENRE", payload: e.target.value })
        }
      >
        <option value="">All Genre</option>
        {genreList.map((ele) => (
          <option value={ele}>{ele}</option>
        ))}
      </select>
      <select
        value={year}
        onChange={(e) =>
          dispatch({ type: "SET_YEAR", payload: e.target.value })
        }
      >
        <option value="">Release Year</option>
        <option value="1990">1990</option>
        <option value="1991">1991</option>
        <option value="1992">1992</option>
        <option value="1993">1993</option>
        <option value="1994">1994</option>
        <option value="1995">1995</option>
        <option value="1996">1996</option>
        <option value="1997">1997</option>
        <option value="1998">1998</option>
        <option value="1999">1999</option>
        <option value="2000">2000</option>
        <option value="2001">2001</option>
        <option value="2002">2002</option>
        <option value="2003">2003</option>
        <option value="2003">2003</option>
        <option value="2004">2004</option>
        <option value="2005">2005</option>
        <option value="2006">2006</option>
        <option value="2007">2007</option>
        <option value="2008">2008</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
        <option value="2011">2011</option>
        <option value="2012">2012</option>
        <option value="2013">2013</option>
        <option value="2014">2014</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
      <select
        value={rating}
        onChange={(e) =>
          dispatch({ type: "SET_RATING", payload: e.target.value })
        }
      >
        <option value="">Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="5">6</option>
        <option value="5">7</option>
        <option value="5">8</option>
        <option value="5">9</option>
        <option value="5">10</option>
      </select>
      <button onClick={() => setIsModal(true)}>Add A Movie</button>
    </div>
  );
};

export default Filter;
