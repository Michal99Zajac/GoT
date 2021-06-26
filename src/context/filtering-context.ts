import React from 'react';


interface FilteringContext {
  gender: 'any' | 'male' | 'female';
  culture: string;
  pagination: string;
  setGender: Function;
  setCulture: Function;
  setPagination: Function;
}

const filteringContext = React.createContext<FilteringContext>({
  gender: 'any',
  culture: '',
  pagination: '25',
  setGender: () => {},
  setCulture: () => {},
  setPagination: () => {}
});

export default filteringContext;
