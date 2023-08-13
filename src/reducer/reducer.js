import { movies } from "../data/data";
import { v4 as uuid } from "uuid";

export const initialState = {
  data: movies,
  watchlist: [],
  starred: [],
  selectGenre: "",
  year: "",
  rating: "",
  search: "",
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_DATA": {
      return state;
    }
    case "WATCH": {
      localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
      return state;
    }

    case "STAR": {
      localStorage.setItem("star", JSON.stringify(state.starred));
      return state;
    }

    case "SET_RATING":
      return { ...state, rating: payload };

    case "SET_YEAR":
      return { ...state, year: payload };
    case "SET_GENRE":
      console.log(payload);
      return { ...state, selectGenre: payload };

    case "SEARCH": {
      return { ...state, search: payload };
    }

    case "NEW":
      const newData = {
        id: uuid(),
        ...payload,
        rating: Number(payload.rating),
        year: Number(payload.year),
        genre: payload.genre.split(","),
        cast: payload.genre.split(","),
      };
      return { ...state, data: [...state.data, newData] };

    case "ADD_WATCH": {
      return { ...state, watchlist: [...state.watchlist, payload] };
    }

    case "REMOVE_WATCH": {
      return {
        ...state,
        watchlist: state.watchlist.filter(({ id }) => id !== payload),
      };
    }
    default:
      return state;
  }
};
