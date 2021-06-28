import { render, screen } from '@testing-library/react';
import App from './App'


describe('App component', () => {
  test('app should start on characters page', () => {
    const utils = render(<App />)

    expect(screen.getByText('pagination')).toBeInTheDocument();
  })
})
