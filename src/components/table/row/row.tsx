import React, { useContext } from 'react';
import clsx from 'clsx';
import ThemeContext from '../../../context/theme-context';
import { directionWrap } from '../../../hoc/direction-wrap';
import styles from '../table.module.css';


interface RowProps {
  className?: string;
  id?: string;
  data: any[];
  direction?: 'vertical' | 'horizontal';
}

/**
 * Row Component for representation data int Table Component
 * 
 * - className? (string) - additional class for component
 * - id? (string) - id of component
 * - data (any[]) - data to displaying
 */
export default function Row(props: RowProps): JSX.Element {
  const theme = useContext(ThemeContext);

  return (
    <div
      id={props.id}
      className={clsx(styles.row, props.className, styles[`row-${theme.theme}`])}
    >
      { props.data.map((column, idx) => directionWrap(<span key={`${column}-${idx}`} className={styles.column} >{column}</span>, props.direction)) }
    </div>
  )
}
