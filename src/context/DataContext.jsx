import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { initialState, reducer } from "../reducer/reducer";
import { movies } from "../data/data";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    dispatch({ type: "SET_DATA" });
  }, [state.data]);

  useEffect(() => {
    dispatch({ type: "SET_WATCH" });
  }, [state.watchlist]);
  
  useEffect(() => {
    dispatch({ type: "SET_STAR" });
  }, [state.starred]);

  return (
    <DataContext.Provider value={{ state, dispatch, isModal, setIsModal }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
