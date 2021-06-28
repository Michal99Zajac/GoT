import { act, cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Characters from './characters';
import axios from '../../axios';


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

function setupCharacters(props: any = {}) {
  const defaultProps = {...props};

  mockedAxios.get.mockImplementation(() => Promise.resolve({ data: [{
      url: '',
      aliases: ['alias'],
      allegiances: [],
      culture: 'culture',
      died: '',
      born: '',
      gender: 'male',
      name: ''
    }],
    headers: {
      link: '',
    },
  }))

  const utils = render(
    <Router initialEntries={["/page/2"]}>
      <Characters {...defaultProps} />
    </Router>
  );

  return utils;
}

describe('characters componwnt', () => {
  beforeEach(async () => {
    cleanup;
    jest.resetAllMocks();
  })

  test('character should have Unknown alive status', async () => {
    await act(async () => {
      setupCharacters();
    })

    expect(screen.getByText('Unknown')).toBeInTheDocument();
  })

  test('character should have "No allegiances" status', async () => {
    await act(async () => {
      setupCharacters();
    })

    expect(screen.getByText('No allegiances')).toBeInTheDocument();
  })
})
