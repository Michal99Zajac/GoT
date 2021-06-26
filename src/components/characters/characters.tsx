import React, { useContext, useEffect, useReducer } from 'react';
import { Link, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import FilteringContext from '../../context/filtering-context';
import axios from '../../axios';
import Table from '../table/table';
import Row from '../table/row/row';
import { calcAlive } from '../../helpers/calc-alive';
import { reducer, initialState, Character } from './reducer'
import styles from './characters.module.css';


interface CharactersProps {
  className?: string,
  id?: string
}

interface RawCharacter {
  url: string;
  aliases: string[];
  allegiances: [];
  culture: string;
  died: string;
  born: string;
  gender: string;
  name: string;
}

/**
 * Characters Component for display table of characters
 * 
 * - className? (string) - additional class for component
 * - id? (string) - id of component
 */
export default function Characters(props: CharactersProps): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  const filter = useContext(FilteringContext);
  const history = useHistory();
  const { page } = queryString.parse(history.location.search || '?page=1')

  async function fetchCharacters() {
    dispatch({...state, type: 'SET_LOADING', loading: true});

    try {
      const res = await axios.get<RawCharacter[]>(
        `/characters?page=${page}&pageSize=${filter.pagination}&gender=${filter.gender}&culture=${filter.culture}`
      );

      const characters = res.data.map(c => ({
        id: c.url.split('/').pop() ?? '',
        name: [c.name, ...c.aliases].join(','),
        alive: calcAlive(c.born, c.died),
        gender: c.gender,
        culture: c.culture === '' ? 'Unknown' : c.culture,
        allegiances: c.allegiances.length == 0 ? 'No allegiances' : c.allegiances
      }));
  
      dispatch({
        ...state,
        type: 'SET_CHARACTERS',
        characters: characters
      })

    } catch (err) {
      console.log(err);
    }

    dispatch({...state, type: 'SET_LOADING', loading: false});
  }

  useEffect(() => {
    fetchCharacters();
  }, [filter.culture, filter.gender, filter.pagination])

  return (
    <div id={props.id} className={`${styles.characters} ${props.className ?? ''}`}>
      <Table
        loading={state.loading}
        className={styles.table}
        columns={['character', 'alive', 'gender', 'culture', 'allegiances']}
      >
        { state.characters.map(c => (
          <Row
            data={[
              c.name,
              c.alive,
              c.gender,
              c.culture,
              c.allegiances
            ]}
          />
        )) }
      </Table>
    </div>
  )
}
