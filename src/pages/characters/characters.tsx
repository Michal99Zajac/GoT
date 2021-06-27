import React, { useReducer } from 'react';
import FilteringContext from '../../context/filtering-context';
import NavContext from '../../context/nav-context';
import Sidebar from '../../components/sidebar/sidebar';
import CharactersTable from '../../components/characters/characters';
import Pagination from '../../components/pagination/pagination';
import { reducer, initialState, Nav } from './reducer';


/**
 * Characters page
 */
export default function Characters(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FilteringContext.Provider value={{
      gender: state.gender,
      culture: state.culture,
      pagination: state.pagination,
      setCulture: (culture: string) => dispatch({...state, type: 'SET_CULTURE', culture: culture}),
      setGender: (gender: 'any' | 'male' | 'female') => dispatch({...state, type: 'SET_GENDER', gender: gender}),
      setPagination: (pagination: '10' | '25' | '50') => 
        dispatch({...state, type: 'SET_PAGINATION', pagination: pagination})
    }}>
      <NavContext.Provider value={{
        nav: {
          first: state.nav.first,
          next: state.nav.first,
          previous: state.nav.previous,
          last: state.nav.last,
          current: state.nav.current
        },
        setNav: (nav: Nav) => dispatch({...state, type: 'SET_NAV', nav: nav})
      }}>
        <div className='fill-all characters-page'>
          <Sidebar className='grid-sidebar' />
          <CharactersTable className='grid-characters' />
          <div className='grid-pagination'>
            <Pagination
              last={state.nav.last}
              previous={state.nav.previous}
              next={state.nav.next}
              first={state.nav.first}
              current={state.nav.current}
              path='characters/page'
            />
          </div>
        </div>
      </NavContext.Provider>
    </FilteringContext.Provider>
  );
}
