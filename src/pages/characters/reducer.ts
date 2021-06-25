export interface State {
  culture: string;
  gender: 'any' | 'male' | 'famale';
  pagination: '10' | '25' | '50';
  page: string;
}

export interface Action extends State {
  type: 'SET_CULTURE' | 'SET_GENDER' | 'SET_PAGINATION' | 'SET_PAGE';
}

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_CULTURE':
      return {...state, culture: action.culture};
    case 'SET_GENDER':
      return {...state, gender: action.gender};
    case 'SET_PAGINATION':
      return {...state, pagination: action.pagination};
    case 'SET_PAGE':
      return {...state, page: action.page};
    default:
      return state;
  }
};

export const initialState: State = {
  culture: '',
  gender: 'any',
  pagination: '25',
  page: ''
}
