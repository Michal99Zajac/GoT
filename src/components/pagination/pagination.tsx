import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../../context/theme-context';
import styles from './pagination.module.css';


interface PaginationProps {
  className?: string;
  id?: string;
  next?: string;
  current: string;
  previous?: string;
  first?: string;
  last?: string;
}

export default function Pagination(props: PaginationProps): JSX.Element {
  const theme = useContext(ThemeContext);

  return (
    <div id={props.id} className={`${styles.pagination} ${props.className ?? ''}`}>
      <Link
        className={`${styles.link} ${!props.first ? styles.disabledLink : ''} ${styles[`link-${theme.theme}`]}`}
        to={`/characters/page/${props.first}`}>
        first
      </Link>
      <Link
        className={`${styles.link} ${!props.previous ? styles.disabledLink : ''} ${styles[`link-${theme.theme}`]}`}
        to={`/characters/page/${props.previous}`}>
        previous
      </Link>
      <span className={`${styles.link} ${styles.current} ${styles[`link-${theme.theme}`]}`}>{props.current}</span>
      <Link
        className={`${styles.link} ${!props.next ? styles.disabledLink : ''} ${styles[`link-${theme.theme}`]}`}
        to={`/characters/page/${props.next}`}>
        next
      </Link>
      <Link
        className={`${styles.link} ${!props.last ? styles.disabledLink : ''} ${styles[`link-${theme.theme}`]}`}
        to={`/characters/page/${props.last}`}>
        last
      </Link>
    </div>
  )
}
