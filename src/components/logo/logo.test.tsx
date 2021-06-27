import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Logo from './logo';


function setupLogo(props: any = {}) {
  const defaultProps = {
    to: ''
  }

  const utils = render(
    <MemoryRouter initialEntries={['/']}>
      <Logo {...defaultProps} />
      <Route path='/page' component={() => <div>Page</div>} />
    </MemoryRouter>
  );

  return utils;
}

describe('logo component', () => {
  test('after logo click location should be different', () => {
    const logo = setupLogo({ to: '/new/location' });
    const link = logo.container.getElementsByClassName('logo')[0];

    const notExistComp = logo.queryByText('Page');
    expect(notExistComp).toBeNull();

    fireEvent.click(link);

    const existComponent = screen.queryByText('Page');
    expect(existComponent).toBeDefined();
  })

  test('logo should have svg img by default', () => {
    const logo = setupLogo();
    const svg = logo.container.getElementsByTagName('svg')[0];

    expect(svg).toBeDefined();
  })
})
