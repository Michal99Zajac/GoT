import React, { ChangeEvent, useContext, useState } from 'react';
import ThemeContext from '../../context/theme-context';
import { ReactComponent as ArrowSvg } from '../../assets/svg/arrow.svg';
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

interface SelectProps {
  className?: string;
  id?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
  name: string;
  options: {
    id: string,
    value: string;
  }[]
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
      className={`${styles.inputDiv} ${props.className ?? ''}`}
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

export function Select(props: SelectProps): JSX.Element {
  const theme = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${styles.inputDiv} ${props.className ?? ''}`}
      id={props.id}
    >
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`${styles.select} ${styles.input} ${styles[`input-${theme.theme}`]}`}
    >
      {props.value}
      <ArrowSvg className={`${styles.arrow} ${isOpen ? styles.arrowUp : styles.arrowDown}`} />
      <div className={`${styles.options} ${styles[`options-${theme.theme}`]} ${!isOpen ? styles.optionsHide : ''}`}>
        { props.options.map(option => (
          <>
            <input
              defaultChecked={option.value === props.value}
              type='radio'
              onChange={props.onChange}
              name={props.name}
              id={`${option.id}-${props.name}`}
              value={option.value}
            />
            <label
              className={`${styles.radio} ${styles[`radio-${theme.theme}`]}`}
              htmlFor={`${option.id}-${props.name}`}
            >{option.value}</label>
          </>
        )) }
      </div>
    </button>
    { props.label &&
      <label className={`${styles.label} ${styles[`label-${theme.theme}`]}`}>
        {props.label}
      </label>
    }
    </div>
  );
}
