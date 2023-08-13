import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { initialState, reducer } from "../reducer/reducer";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isModal,setIsModal] = useState(false)

  useEffect(() => {
    dispatch({ type: "SET_DATA" });
  }, [state.data]);
  useEffect(() => {
    dispatch({ type: "SET_DATA" });
  }, [state.data]);
  useEffect(() => {
    dispatch({ type: "SET_DATA" });
  }, [state.data]);
  return (
    <DataContext.Provider value={{ state, dispatch,isModal,setIsModal }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
