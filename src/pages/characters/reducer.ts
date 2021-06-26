export interface Nav {
  next: string | undefined;
  previous: string | undefined;
  first: string | undefined;
  last: string | undefined;
  current: string;
}

export interface State {
  culture: string;
  gender: 'any' | 'male' | 'female';
  pagination: '10' | '25' | '50';
  nav: {
    next: string | undefined,
    previous: string | undefined,
    first: string | undefined,
    last: string | undefined,
    current: string
  }
}

export interface Action extends State {
  type: 'SET_CULTURE' | 'SET_GENDER' | 'SET_PAGINATION' | 'SET_NAV';
}

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_CULTURE':
      return {...state, culture: action.culture};
    case 'SET_GENDER':
      return {...state, gender: action.gender};
    case 'SET_PAGINATION':
      return {...state, pagination: action.pagination};
    case 'SET_NAV':
      return {...state, nav: action.nav};
    default:
      return state;
  }
};

const filter = JSON.parse(window.localStorage.getItem('filter') ?? '{}')

export const initialState: State = {
  culture: filter.culture ?? '',
  gender: filter.gender ?? 'any',
  pagination: filter.pagination ?? '25',
  nav: {
    next: undefined,
    first: undefined,
    last: undefined,
    previous: undefined,
    current: window.location.pathname.split('/').pop() ?? '1'
  }
}
