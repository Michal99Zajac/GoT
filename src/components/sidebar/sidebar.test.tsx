import { render, fireEvent } from '@testing-library/react';
import FilteringContext, {} from '../../context/filtering-context';
import Sidebar from './sidebar';


function setupSidebar(props: any = {}) {
  const defaultProps = {...props};

  const values: {
    gender: 'any' | 'male' | 'female',
    culture: string,
    pagination: '10' | '25' | '50'
  } = {
    gender: 'any',
    culture: '',
    pagination: '25'
  }

  const utils = render(
    <FilteringContext.Provider value={{
      gender: values.gender,
      culture: values.culture,
      pagination: values.pagination,
      setGender: (value: any) => { values.gender = value },
      setCulture: (value: any) => { values.culture = value },
      setPagination: (value: any) => { values.pagination = value }
    }}>
      <Sidebar {...defaultProps} />
    </FilteringContext.Provider>
  )

  return utils;
}

describe('sidebar component', () => {
  test('change of value should change data in localStorage', () => {
    const localStorage = window.localStorage.getItem('filter');

    expect(localStorage).toBeNull();

    const utils = setupSidebar();
    const input = utils.getByPlaceholderText('culture');
    
    fireEvent.change(input, { target: { value: 'new value' }})

    const newLocalStorage = window.localStorage.getItem('filter') ?? undefined;
    expect(newLocalStorage).toBeDefined();
  })
})
