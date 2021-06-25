import React from 'react';


interface FilteringContext {
  gender: string;
  culture: string;
  pagination: number;
  setGender: Function;
  setCulture: Function;
  setPagination: Function;
}

const filteringContext = React.createContext<FilteringContext>({
  gender: '',
  culture: '',
  pagination: 25,
  setGender: () => {},
  setCulture: () => {},
  setPagination: () => {}
});

export default filteringContext;
