import styles from './direction-wrap.module.css';


/**
 * HOC for better structure of horizontal table
 */
 export const directionWrap = (element: any, direction: 'vertical' | 'horizontal' | undefined) => {
  if (direction === 'horizontal') {
    return <div className={styles.horizontalDiv}>{element}</div>;
  } else {
    return element;
  }
}
