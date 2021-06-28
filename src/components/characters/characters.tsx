import React, { useContext, useEffect, useReducer } from 'react';
import clsx from 'clsx';
import { Link, useHistory, useParams } from 'react-router-dom';
import FilteringContext from '../../context/filtering-context';
import ThemeContext from '../../context/theme-context';
import NavContext from '../../context/nav-context';
import axios from '../../axios';
import Table from '../table/table';
import Row from '../table/row/row';
import { calcAlive } from '../../helpers/calc-alive';
import { parseLink } from '../../helpers/parse-link';
import { reducer, initialState } from './reducer';
import styles from './characters.module.css';


interface CharactersProps {
  className?: string,
  id?: string
}

export interface RawCharacter {
  url: string;
  aliases: string[];
  allegiances: string[];
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
  const theme = useContext(ThemeContext);
  const nav = useContext(NavContext)
  const history = useHistory();
  const { page } = useParams<{ page: string }>();

  /**
   * parse linkHeader and update nav context
   */
  function setNav(linkHeader: string) {
    const newNav = parseLink(linkHeader);

    nav.setNav({
      current: page,
      next: newNav.next,
      previous: newNav.previous,
      last: newNav.last,
      first: newNav.first
    });
  }

  /**
   * fetch characters by page, pageSize, gender and culture
   */
  async function fetchCharacters() {
    dispatch({...state, type: 'SET_LOADING', loading: true});

    try {
      const res = await axios.get<RawCharacter[]>(
        `/characters?page=${page}&pageSize=${filter.pagination}&gender=${filter.gender}&culture=${filter.culture}`
      );

      /**
       * sets the nav object for the navigation table
       */
      setNav(res.headers.link);

      /**
       * filter all data for app data preferences
       */
      const characters = res.data.map(c => ({
        id: c.url.split('/').pop() ?? '',
        name: [...c.aliases, c.name].filter(e => e !== '').join(', '),
        alive: calcAlive(c.born, c.died),
        gender: c.gender,
        culture: c.culture === '' ? 'Unknown' : c.culture,
        allegiances: c.allegiances.length === 0 ? 'No allegiances' : c.allegiances.map(a => `${a.split('/').pop()}`)
      }));
  
      /**
       * set filtered data
       */
      dispatch({
        ...state,
        type: 'SET_CHARACTERS',
        characters: characters
      });

    } catch (err) {
      console.log(err);
    }

    dispatch({...state, type: 'SET_LOADING', loading: false});
  }

  useEffect(() => {
    fetchCharacters();
  }, [filter.culture, filter.gender, filter.pagination, history.location.pathname])

  return (
    <div id={props.id} className={clsx(styles.characters, props.className)}>
      <Table
        loading={state.loading}
        className={styles.table}
        columns={['character', 'alive', 'gender', 'culture', 'allegiances']}
      >
        { state.characters.map(row => (
          <Row
            key={JSON.stringify(row)}
            data={[
              row.name,
              row.alive,
              row.gender,
              row.culture,
              <ul className={styles.ul}>
                { !Array.isArray(row.allegiances) ? <li>{row.allegiances}</li> : row.allegiances.map(item => (
                  <Link key={`house-${row.id}-${item}`} className={styles[`link-${theme.theme}`]} to={`/houses/${item}`}><li># {item}</li></Link>
                ))}
              </ul>
            ]}
          />
        )) }
      </Table>
    </div>
  )
}
