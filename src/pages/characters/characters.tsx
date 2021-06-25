import React, { useReducer } from 'react';
import FilteringContext from '../../context/filtering-context';
import Sidebar from '../../components/sidebar/sidebar';
import { reducer, initialState } from './reducer';


export default function Characters(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FilteringContext.Provider value={{
      gender: state.gender,
      culture: state.culture,
      pagination: state.pagination,
      setCulture: (culture: string) => dispatch({...state, type: 'SET_CULTURE', culture: culture}),
      setGender: (gender: string) => dispatch({...state, type: 'SET_GENDER', gender: gender}),
      setPagination: (pagination: 10 | 25 | 50) => 
        dispatch({...state, type: 'SET_PAGINATION', pagination: pagination})
    }}>
      <div className='fill-all'>
        <Sidebar />
      </div>
    </FilteringContext.Provider>
  );
}
