import React, { useReducer } from 'react';
import ThemeContext from './context/theme-context';
import { reducer, initialState } from './reducer';
import './App.css';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={{
      theme: 'primary',
      changeTheme: () => dispatch({ ...state, type: 'SET_THEME' })
    }}>
      <div className={`App background-${state.theme}`}>
        
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
