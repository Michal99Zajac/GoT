import React, { useContext } from 'react';
import ThemeContext from '../../../context/theme-context';
import styles from '../table.module.css';


interface RowProps {
  className?: string;
  id?: string;
  data: string[];
}

export default function Row(props: RowProps): JSX.Element {
  const theme = useContext(ThemeContext);

  return (
    <div
      id={props.id}
      className={`${styles.row} ${props.className ?? ''} ${styles[`row-${theme.theme}`]}`}
    >
      { props.data.map((c, idx) => <span key={idx} className={styles.column} >{c}</span>) }
    </div>
  )
}
