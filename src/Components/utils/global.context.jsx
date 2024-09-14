import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

export const GlobalContext = createContext();


const initialState = {
  theme: 'light',  
  dentists: [],    
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_DENTISTS':
      return { ...state, dentists: action.payload };
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {
    document.body.className = state.theme === 'dark' ? 'dark' : 'light';
  }, [state.theme]);


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch({ type: 'SET_DENTISTS', payload: response.data });
      })
      .catch(error => console.error('Error fetching dentists:', error));
  }, []);

  
  const toggleTheme = () => {
    dispatch({ type: 'SET_THEME', payload: state.theme === 'light' ? 'dark' : 'light' });
  };

  return (
    <GlobalContext.Provider value={{ ...state, toggleTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};