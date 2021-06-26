export interface House {
  name: string;
  region: string;
  coatOfArms: string;
  words: string;
  titles: string[];
  seats: string[];
  hasDiedOut: string;
  hasOverlord: string;
  numberOfCadetBranches: number;
}

export interface State {
  house: House;
  loading: boolean;
}

export interface Action extends State {
  type: 'SET_LOADING' | 'SET_HOUSE';
}

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_HOUSE':
      return {...state, house: action.house};
    case 'SET_LOADING':
      return {...state, loading: action.loading};
    default:
      return state;
  }
}

export const initialState: State = {
  loading: true,
  house: {
    name: '',
    region: '',
    coatOfArms: '',
    words: '',
    titles: [],
    seats: [],
    hasDiedOut: '',
    hasOverlord: '',
    numberOfCadetBranches: 0
  }
}

