import React, { useContext, useMemo } from 'react';
import { useEffect } from 'react';
import FilteringContext from '../../context/filtering-context';
import ThemeContext from '../../context/theme-context';
import { Textfield } from '../input/input';
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

  return (
    <div className={`${styles.sidebar} ${styles[`s-${theme.theme}`]} ${props.className && ''}`}>
      <Textfield
        value={filter.culture}
        onChange={e => filter.setCulture(e.target.value)}
        label='culture'
        placeholder='culture'
      />
    </div>
  );
}
