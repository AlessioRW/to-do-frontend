import React, { createContext, useState, useContext } from 'react';

const useTodos = () => useState([]);

const MyContext = createContext(null);

export const useTodosState = () => {
  const value = useContext(MyContext);
  if (value === null) throw new Error('Please add SharedStateProvider');
  return value;
};

export const SharedStateProvider = ({ children }) => (
  <MyContext.Provider value={useTodos()}>{children}</MyContext.Provider>
);