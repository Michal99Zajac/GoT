import React, { useContext } from 'react';
import clsx from 'clsx';
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
  path: string;
}

/**
 * Pagination Component for navigation on data
 * 
 * - className? (string) - additional class for component
 * - id? (string) - id of component
 * - next? (string) - number of next page
 * - current (string) - number of current page
 * - previous? (string) - number of previous page
 * - first? (string) - number of first page
 * - last? (string) - number of last page
 * - path (string) - path to page redirection
 */
export default function Pagination(props: PaginationProps): JSX.Element {
  const theme = useContext(ThemeContext);

  return (
    <div id={props.id} className={clsx(styles.pagination, props.className)}>
      <Link
        className={`${styles.link} ${!props.first ? styles.disabledLink : ''} ${styles[`link-${theme.theme}`]}`}
        to={`/${props.path}/${props.first}`}>
        first
      </Link>
      <Link
        className={`${styles.link} ${!props.previous ? styles.disabledLink : ''} ${styles[`link-${theme.theme}`]}`}
        to={`/${props.path}/${props.previous}`}>
        previous
      </Link>
      <span className={`${styles.link} ${styles.current} ${styles[`link-${theme.theme}`]}`}>{props.current}</span>
      <Link
        className={`${styles.link} ${!props.next ? styles.disabledLink : ''} ${styles[`link-${theme.theme}`]}`}
        to={`/${props.path}/${props.next}`}>
        next
      </Link>
      <Link
        className={`${styles.link} ${!props.last ? styles.disabledLink : ''} ${styles[`link-${theme.theme}`]}`}
        to={`/${props.path}/${props.last}`}>
        last
      </Link>
    </div>
  )
}
