import React from 'react';
import { Link } from 'react-router-dom';
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
  return (
    <div id={props.id} className={`${styles.pagination} ${props.className ?? ''}`}>
      <Link className={styles.link} to={`/characters/page/${props.first}`}>first</Link>
      <Link className={styles.link} to={`/characters/page/${props.first}`}>previous</Link>
      <span className={styles.link}>{props.current}</span>
      <Link className={styles.link} to={`/characters/page/${props.first}`}>next</Link>
      <Link className={styles.link} to={`/characters/page/${props.first}`}>last</Link>
    </div>
  )
}
