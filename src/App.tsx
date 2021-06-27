import React, { useReducer } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { MainLayout } from './components/layout/layout';
import Navbar from './components/navbar/navbar';
import Toggle from './components/toggle/toggle';
import Logo from './components/logo/logo';
import Houses from './pages/houses/houses';
import Characters from './pages/characters/characters';
import NotFound from './pages/404/not-found';
import ThemeContext from './context/theme-context';
import { reducer, initialState } from './reducer';
import './App.css';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const body = (
    <Switch>
      <Redirect exact from='/' to='/characters/page/1' />
      <Route path='/houses/:id' component={Houses} />
      <Route exact path='/characters/page/:page' component={Characters}/>
      <Route component={NotFound} />
    </Switch>
  );
  const navbar = (
    <Navbar logo={<Logo to='/'/>}>
      <Toggle
        defaultValue={state.theme === 'primary' ? true : false}
        onChange={() => dispatch({ ...state, type: 'SET_THEME' })}
      />
    </Navbar>
  );

  return (
    <ThemeContext.Provider value={{
      theme: state.theme,
      changeTheme: () => dispatch({ ...state, type: 'SET_THEME' })
    }}>
      <Router>
        <div className={`App background-${state.theme}`}>
          <MainLayout
            navbar={navbar}
            body={body}
          />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
