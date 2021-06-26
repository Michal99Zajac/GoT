import React from 'react';
import { House, initialState } from '../pages/houses/reducer'


interface HouseContext {
  house: House;
  loading: boolean;
  setHouse: Function;
  setLoading: Function;
}

/**
 * HouseContext for provide house data from specific child component to higher component
 */
const houseContext = React.createContext<HouseContext>({
  house: initialState.house,
  loading: false,
  setHouse: () => {},
  setLoading: () => {}
});

export default houseContext;
