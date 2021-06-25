import React from 'react';
import styles from './layout.module.css';


interface MainLayoutProps {
  className?: string;
  id?: string;
  navbar: JSX.Element;
  body: JSX.Element;
}

/**
 * MainLayout general layout with body and navbar
 * 
 * - className? (string) - additional class for component
 * - id? (string) - id of component
 * - navbar (JSX.Element) - navbar component
 * - body (JSX.Element) - element for rest of available space on screen
 */
export function MainLayout(props: MainLayoutProps): JSX.Element {
  return (
    <div
      className={`${styles.layout} ${props.className ?? ''}`}
      id={props.id}
    >
      <div className={styles.navbar}>{props.navbar}</div>
      <div className={styles.body}>{props.body}</div>
    </div>
  );
}
