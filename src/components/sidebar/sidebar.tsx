import React, { useContext } from 'react';
import FilteringContext from '../../context/filtering-context';
import ThemeContext from '../../context/theme-context';
import { Textfield, Select } from '../input/input';
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
        className={styles.bottomMargin}
        value={filter.culture}
        onChange={e => filter.setCulture(e.target.value)}
        label='culture'
        placeholder='culture'
      />
      <Select
        label='gender'
        className={styles.bottomMargin}
        value={filter.gender}
        onChange={e => filter.setGender(e.target.value)}
        name='gender'
        options={[
          { id: '1', value: 'any' },
          { id: '2', value: 'male' },
          { id: '3', value: 'famale' }
        ]}
      />
    </div>
  );
}
