import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import Pagination, { PaginationProps } from './pagination';


function setupPagination(props: any = {}) {
  const defaultProps: PaginationProps = {
    path: 'page',
    current: '3',
    first: '1',
    last: '5',
    previous: '2',
    next: '4',
    ...props
  };

  const utils = render(
    <Router initialEntries={['/page/3']}>
      <Pagination {...defaultProps} />
      <Route path='/page/1' component={() => <div>firstpage</div>} />
      <Route path='/page/2' component={() => <div>previouspage</div>} />
      <Route path='/page/3' component={() => <div>current</div>} />
      <Route path='/page/4' component={() => <div>nextpage</div>} />
      <Route path='/page/5' component={() => <div>lastpage</div>} />
    </Router>
  );

  return utils;
}

describe('pagination component', () => {
  test('location should change to first page', () => {
    const utils = setupPagination();

    expect(utils.getByText('current')).toBeInTheDocument();

    fireEvent.click(screen.getByText('first'));

    expect(utils.getByText('firstpage')).toBeInTheDocument();
  })

  test('location should change to previous page', () => {
    const utils = setupPagination();

    fireEvent.click(screen.getByText('previous'));

    expect(utils.getByText('previouspage')).toBeInTheDocument();
  })

  test('location should change to next page', () => {
    const utils = setupPagination();

    fireEvent.click(screen.getByText('next'));

    expect(utils.getByText('nextpage')).toBeInTheDocument();
  })

  test('location should change to the last page', () => {
    const utils = setupPagination();

    fireEvent.click(screen.getByText('last'));

    expect(utils.getByText('lastpage')).toBeInTheDocument();
  })

  test('location should not change to previous if page is first', () => {
    const utils = setupPagination({
      current: '1',
      first: '1',
      last: '5',
      previous: undefined,
      next: '2'
    });

    expect(utils.getByText('previous').className).toContain('disabledLink');
  })
})
