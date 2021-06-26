export interface Allegiance {
  id: string;
  name: string;
}
export interface Character {
  id: string;
  name: string;
  alive: 'Yes' | 'No' | 'Unknown' | string;
  gender: string;
  culture: string;
  allegiances: Allegiance[] | string;
}

export interface State {
  loading: boolean;
  characters: Character[];
}

export interface Action extends State {
  type: 'SET_LOADING' | 'SET_CHARACTERS';
}

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {...state, loading: action.loading};
    case 'SET_CHARACTERS':
      return {...state, characters: action.characters};
    default:
      return state;
  }
}

export const initialState: State = {
  loading: true,
  characters: []
}
