import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import FilteringContext from '../../context/filtering-context';
import ThemeContext from '../../context/theme-context';
import { Textfield, Select, Radio } from '../input/input';
import styles from './sidebar.module.css';


interface SidebarProps {
  className?: string;
  id?: string;
}

/**
 * Sidebar Component - stores any component on column direction
 * 
 * - className? (string) - additional class for componwnt
 * - id? (string) - id of component
 */
export default function Sidebar(props: SidebarProps): JSX.Element {
  const filter = useContext(FilteringContext);
  const theme = useContext(ThemeContext);
  const history = useHistory();

  function onKeyUp(e: React.KeyboardEvent) {
    let timer;
    clearInterval(timer);
    timer = setTimeout(() => {
      history.push('/characters/page/1')
    }, 1000)
  }

  useEffect(() => {
    window.localStorage.setItem('filter', JSON.stringify({
      culture: filter.culture,
      gender: filter.gender,
      pagination: filter.pagination
    }))
  }, [filter.culture, filter.gender, filter.pagination])

  return (
    <div className={`${styles.sidebar} ${styles[`s-${theme.theme}`]} ${props.className ?? ''}`}>
      <Textfield
        className={styles.bottomMargin}
        value={filter.culture}
        onChange={e => filter.setCulture(e.target.value)}
        label='culture'
        placeholder='culture'
        onKeyUp={e => onKeyUp(e)}
      />
      <Select
        label='gender'
        className={styles.bottomMargin}
        value={filter.gender}
        onChange={e => {
          history.push('/characters/page/1')
          filter.setGender(e.target.value)
        }}
        name='gender'
        options={[
          { id: '1', value: 'any' },
          { id: '2', value: 'male' },
          { id: '3', value: 'female' }
        ]}
      />
      <Radio
        label='pagination'
        className={styles.bottomMargin}
        value={filter.pagination}
        onChange={e => filter.setPagination(e.target.value)}
        name='pagination'
        options={[
          { id: '1', value: '10' },
          { id: '2', value: '25' },
          { id: '3', value: '50' }
        ]}
      />
    </div>
  );
}
