import React, { useContext } from 'react';
import ThemeContext from '../../context/theme-context';
import styles from './input.module.css';


interface TextfieldProps {
  className?: string;
  id?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  type?: 'text';
  label?: string;
}

/**
 * Textfield Component - standard input for entering a value
 * 
 * - className? (string) - additional class for component
 * - id? (string) - id of component
 * - onKeyUp? (KeyboardEventHandler) - function to exec after keyboard click
 * - type? (text) - tape of input
 * - label? (string) - label of input
 * - value (string) - value of input
 * - onChange (ChangeEventHandler) - function to exec after value change
 */
export function Textfield(props: TextfieldProps): JSX.Element {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={`${styles.txtfield} ${props.className && ''}`}
      id={props.id}
    >
      <input
        className={`${styles.input} ${styles[`input-${theme.theme}`]}`}
        type={props.type ?? 'text'}
        value={props.value}
        onKeyUp={props.onKeyUp}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
      { props.label &&
        <label className={`${styles.label} ${styles[`label-${theme.theme}`]}`}>
          {props.label}
        </label>
      }
    </div>
  );
}

