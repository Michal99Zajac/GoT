import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from '../../assets/svg/logo.svg';
import './logo.css';


interface LogoProps {
  className?: string;
  id?: string;
  to: string;
  svg?: JSX.Element;
}

/**
 * Logo Component: illustrates application logo and acts as link
 * 
 * - className? (string) - additional class for component
 * - id? (string) - id of component
 * - to (string) - path to be relocated
 * - svg? (JSX.Element) - logo other than basic
 */
export default function Logo(props: LogoProps): JSX.Element {
  return (
    <Link
      className={`logo ${props.className && ''}`}
      id={props.id}
      to={props.to}
    >
      { props.svg || <LogoSvg /> }
    </Link>
  );
}
