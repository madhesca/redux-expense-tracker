import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const localState = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

const initialState = {
  transactions: localState
};

console.log("herePo", initialState);
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const deleteItem = id => {
    dispatch({
      type: "DELETE_ITEM",
      payload: id
    });
  };

  const addItem = transaction => {
    dispatch({
      type: "ADD_ITEM",
      payload: transaction
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteItem,
        addItem
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
