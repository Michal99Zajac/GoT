import React, { useContext, useEffect, useReducer } from 'react';
import { Link, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import FilteringContext from '../../context/filtering-context';
import axios from '../../axios';
import Table from '../table/table';
import Row from '../table/row/row'
import { reducer, initialState } from './reducer'
import styles from './characters.module.css';


interface CharactersProps {
  className?: string,
  id?: string
}

export default function Characters(props: CharactersProps): JSX.Element {
  const filter = useContext(FilteringContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useHistory();
  const { page } = queryString.parse(history.location.search || '?page=1')

  async function fetchCharacters() {
    dispatch({...state, type: 'SET_LOADING', loading: true});

    try {
      const res = await axios.get(`/characters?page=${page}&pageSize=${filter.pagination}`);

      console.log(history.location.search);
      console.log(page)

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
      <Table loading={state.loading} className={styles.table} columns={['character', 'alive', 'gender', 'culture', 'allegiances']}>
        <Link to='another'><Row data={['hello', 'world', 'stupid', 'words', <ul className={styles.ul}>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>]} /></Link>
        <Row data={['hello', 'world', 'stupid', 'words', 'another']} />
        <Row data={['hello', 'world', 'stupid', 'words', 'another']} />
      </Table>
    </div>
  )
}
