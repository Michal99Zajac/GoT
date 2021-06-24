import React from 'react';
import styles from './layout.module.css';


interface LayoutProps {
  className?: string;
  id?: string;
  navbar: JSX.Element;
  body: JSX.Element;
}

export default function Layout(props: LayoutProps): JSX.Element {
  return (
    <div
      className={`${styles.layout} ${props.className && ''}`}
      id={props.id}
    >
      <div className={styles.navbar}>{props.navbar}</div>
      <div className={styles.body}>{props.body}</div>
    </div>
  );
}
