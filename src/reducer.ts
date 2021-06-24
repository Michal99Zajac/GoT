interface State {
  theme: string | 'primary' | 'secondary';
}

interface Action extends State {
  type: 'SET_THEME';
}

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'SET_THEME':
      const theme = state.theme === 'primary' ? 'secondary' : 'primary';
      return {...state, theme};
    default:
      return state;
  }
}

export const initialState: State = {
  theme: 'primary',
}
