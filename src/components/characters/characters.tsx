import React from 'react';
import axios from '../../axios';
import styles from './characters.module.css';


interface CharactersProps {
  className?: string,
  id?: string
}

export default function Characters(props: CharactersProps): JSX.Element {
  return (
    <div>
      characters
    </div>
  )
}
