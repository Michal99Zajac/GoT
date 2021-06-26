import React from 'react';
import styles from './house.module.css';


interface HouseProps {
  className?: string;
  id?: string;
}

export default function House(props: HouseProps): JSX.Element {
  return (
    <div>
      house
    </div>
  )
}
