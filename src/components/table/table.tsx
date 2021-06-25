import React, { useContext } from 'react';
import ThemeContext from '../../context/theme-context';
import styles from './table.module.css';


interface TableProps {
  className?: string;
  id?: string;
  columns: string[];
  direction?: 'vertical' | 'horizontal';
  children?: any;
  loading?: boolean;
}

/**
 * Table Component - component for display data in table form
 * 
 * - className? (string) - additional class for component
 * - id? (string) - id of component
 * - columns (string[]) - names of columns
 * - direction (vertical | horizontal) - direction of displaying data
 * - children (JSX.Element) - all data to display
 */
export default function Table(props: TableProps): JSX.Element {
  const theme = useContext(ThemeContext);
  const loading = props.loading ? true : false;

  return (
    <div
      id={props.id}
      className={`${styles.table} ${props.className ?? ''} ${styles[`table-${theme.theme}`]} \
       ${styles[`table-${props.direction ? props.direction : 'vertical'}`]}`}
    >
      <div className={`${styles.header} ${styles.row}`}>
        { props.columns.map((c, idx) => <span key={idx} className={styles.column}>{c}</span>) }
      </div>
      <div className={styles.data}>
        { loading ? <div className={styles[`loading-${theme.theme}`]}></div> : props.children }
      </div>
    </div>
  )
}
