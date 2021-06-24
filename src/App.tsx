import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/layout';
import Navbar from './components/navbar/navbar';
import Logo from './components/logo/logo';
import ThemeContext from './context/theme-context';
import { reducer, initialState } from './reducer';
import './App.css';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const body = (
    <Switch>
      <Route path='/house/:id' component={() => <h1>house</h1>} />
      <Route exact path='/' component={() => <h1>characters</h1>}/>
      <Route component={() => <h1>404</h1>} />
    </Switch>
  )
  const navbar = (
    <Navbar logo={<Logo to='/'/>}>hello</Navbar>
  )

  return (
    <ThemeContext.Provider value={{
      theme: 'primary',
      changeTheme: () => dispatch({ ...state, type: 'SET_THEME' })
    }}>
      <Router>
        <div className={`App background-${state.theme}`}>
          <Layout
            navbar={navbar}
            body={body}
          />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
