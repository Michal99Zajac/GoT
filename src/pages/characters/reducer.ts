export interface State {
  culture: string;
  gender: 'any' | 'male' | 'famale';
  pagination: 10 | 25 | 50;
}

export interface Action extends State {
  type: 'SET_CULTURE' | 'SET_GENDER' | 'SET_PAGINATION';
}

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_CULTURE':
      return {...state, culture: action.culture};
    case 'SET_GENDER':
      return {...state, gender: action.gender};
    case 'SET_PAGINATION':
      return {...state, pagination: action.pagination};
    default:
      return state;
  }
};

export const initialState: State = {
  culture: '',
  gender: 'any',
  pagination: 25
}
