import React from 'react';


interface ThemeContext {
  theme: 'primary' | 'secondary';
  changeTheme: Function;
}

/**
 * ThemeContext for change theme of app
 */
const themeContext = React.createContext<ThemeContext>({
  theme: 'primary',
  changeTheme: () => {}
});

export default themeContext;
