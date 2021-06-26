interface State {
  theme: 'priamry' | 'secondary' | string;
}

interface Action extends State {
  type: 'SET_THEME';
}

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'SET_THEME':
      const theme = state.theme === 'primary' ? 'secondary' : 'primary';

      window.localStorage.setItem('theme', JSON.stringify({ theme: theme }))

      return {...state, theme};
    default:
      return state;
  }
}

const theme = JSON.parse(window.localStorage.getItem('theme') ?? '{}')

export const initialState: State = {
  theme: theme.theme ?? 'primary',
}
