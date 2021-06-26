import React from 'react';


interface Nav {
  next: string | undefined;
  previous: string | undefined;
  first: string | undefined;
  last: string | undefined;
  current: string;
}

interface NavContext {
  nav: Nav;
  setNav: Function;
};

/**
 * nav context for location setting
 */
const navContext = React.createContext<NavContext>({
  nav: {
    next: undefined,
    previous: undefined,
    first: undefined,
    last: undefined,
    current: '1'
  },
  setNav: () => {}
});

export default navContext;
