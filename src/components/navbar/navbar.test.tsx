import { render, screen } from '@testing-library/react';
import Navbar from './navbar';


function setupNavbar(props: any = {}) {
  const defaultProps = {
    logo: <div>logo</div>,
    children: undefined,
    ...props
  };

  const utils = render(<Navbar {...defaultProps} />);

  return utils;
}

describe('navbar component', () => {
  test('navbar should not have children', () => {
    const navbar = setupNavbar();

    const children = navbar.container.getElementsByClassName('children')[0];

    expect(children.firstChild).toBeNull();
  })

  test('navbar should have children', () => {
    const navbar = setupNavbar({ children: <div>hello</div>});

    const children = navbar.getByText('hello');

    expect(children).toBeInTheDocument();
  })
})
