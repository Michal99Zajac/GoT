import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './toggle.module.css';


export interface ToggleProps {
  className?: string;
  id?: string;
  defaultValue?: boolean;
  onChange: Function;
}

/**
 * Toggle Component for exec functions after state change
 * 
 * - className? (string) - additional class for component
 * - id? (string) - id of component
 * - onChange (Function) - function to exec after state change
 */
export default function Toggle(props: ToggleProps): JSX.Element {
  const [isOn, setIsOne] = useState(props.defaultValue ?? true);

  function onClick() {
    setIsOne(!isOn);
    props.onChange();
  }

  return (
    <div
      onClick={onClick}
      id={props.id}
      className={clsx(styles.toggle, styles[`toggle-${isOn ? 'on' : 'off'}`], props.className)}
    >
      <span className={styles.toggleButton}></span>
    </div>
  );
}
