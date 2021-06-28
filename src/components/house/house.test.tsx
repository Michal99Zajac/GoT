import { cleanup, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter as Router } from 'react-router-dom'
import axios from '../../axios';
import HouseContext from '../../context/house-context';
import House from './house';


/**
 * create axios mock for implementation
 */
 jest.mock('axios', () => {
  return {
    create: () => {
      return {
        get: jest.fn(() => Promise.resolve(''))
      }
    }
  }
});
const mockedAxios = axios as jest.Mocked<typeof axios>;

function setupHouse(props: any = {}) {
  const defaultProps = {...props};

  mockedAxios.get.mockImplementation(() => Promise.resolve({
    data: {
      name: 'house mock',
      region: 'region mock',
      coatOfArms: '',
      words: '',
      titles: [],
      seats: [],
      overlord: '',
      diedOut: '',
      cadetBranches: ['1', '2']
    }
  }))

  let context = {
    house: {
      name: '',
      region: '',
      coatOfArms: '',
      words: '',
      titles: [],
      seats: [],
      hasDiedOut: '',
      hasOverlord: '',
      numberOfCadetBranches: 0
    },
    loading: true,
    setHouse: jest.fn(),
    setLoading: jest.fn()
  }

  context.setHouse = jest.fn((newHouse) => { context.house = newHouse });
  context.setLoading = jest.fn((newLoading) => { context.loading = newLoading });

  const utils = render(
    <Router initialEntries={['/']}>
      <HouseContext.Provider value={context}>
        <House {...defaultProps} />
      </HouseContext.Provider>
    </Router>
  )

  return {
    ...utils,
    context
  }
}

describe('house component', () => {
  beforeEach(async () => {
    cleanup;
    jest.resetAllMocks();
  })

  test('house axios get schold be exec once', async () => {
    let utils: any;
  
    await act(async () => {
      utils = setupHouse();
    })

    expect(utils.context.setHouse).toHaveBeenCalledTimes(1);
  })

  test('value of context should be changed', async () => {
    let utils: any;
  
    await act(async () => {
      utils = setupHouse();
    })

    expect(utils.context.house.name).toBe('house mock')
  })
})
