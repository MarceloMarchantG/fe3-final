import { createContext, useState, useContext, useEffect, useReducer } from "react";
import { globalReducer } from "./reducers";

export const initialState = {theme: (localStorage.getItem('theme')) || "light", favs: JSON.parse(localStorage.getItem('favoritos')) || [], dentistas: []};

export const ContextGlobal = createContext([]);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo


  const [ state, dispatch ] = useReducer(globalReducer, initialState)

  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => dispatch({type: "SET_DENTISTAS", payload: data}))
  },[])

  console.log(state);

  useEffect(() => {
    localStorage.setItem('theme', state.theme);
  }, [state.theme]);

    
  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal)
