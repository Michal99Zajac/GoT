import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../../context/theme-context';
import styles from './navbar.module.css';


interface NavbarProps {
  className?: string;
  id?: string;
  logo: JSX.Element;
  children?: any;
}

/**
 * 
 */
export default function Navbar(props: NavbarProps): JSX.Element {
  const theme = useContext(ThemeContext)

  return (
    <header
      className={`${styles[`navbar-${theme.theme}`]} ${props.className && ''}`}
      id={props.id}
    >
    </header>
  )
}
