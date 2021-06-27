import React, { useContext, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import ThemeContext from '../../context/theme-context';
import HouseContext from '../../context/house-context';
import House from '../../components/house/house';
import { ReactComponent as ArrowSvg } from '../../assets/svg/arrow.svg'
import { reducer, initialState, House as HouseType } from './reducer';
import './houses.css';


export default function Houses() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const theme = useContext(ThemeContext);
  const history = useHistory()

  return (
    <HouseContext.Provider value={{
      house: state.house,
      loading: state.loading,
      setHouse: (newHouse: HouseType) => dispatch({...state, type: 'SET_HOUSE', house: newHouse}),
      setLoading: (loading: boolean) => dispatch({...state, type: 'SET_LOADING', loading: loading})
    }}>
      <div className='fill-all houses-page'>
        { !state.loading && <p className={`grid-arms arms-h1 text-${theme.theme}`}>{state.house.coatOfArms}</p> }
        <div className='grid-house house'>
          <div className='header'>
            <ArrowSvg className={'back-arrow'} onClick={() => history.goBack()} />
            <p className={`house-name text-${theme.theme}`}>
              {!state.loading ? state.house.name : <span className={`p-loading-${theme.theme}`}></span>}
            </p>
          </div>
          <House />
        </div>
      </div>
    </HouseContext.Provider>
  );
}
