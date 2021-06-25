import React from 'react';
import styles from './navbar.module.css';


interface NavbarProps {
  className?: string;
  id?: string;
  logo: JSX.Element;
  children?: any;
}

/**
 * Navbar Component for simple navigation on the app
 * 
 * - className? (string) - additional class for component
 * - id? (string) - id of component
 * - logo (JSX.Element) - logo to be placed on the navbar left side
 * - children? (any) - elements to be placed on the navbar right side
 */
export default function Navbar(props: NavbarProps): JSX.Element {
  return (
    <header
      className={`${styles.navbar} ${props.className ?? ''}`}
      id={props.id}
    >
      <span className={styles.logo}>
        {props.logo}
      </span>
      <span className={styles.children}>
        {props.children}
      </span>
    </header>
  )
}
