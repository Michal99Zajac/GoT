import React from 'react';
import axios from '../../axios';
import Table from '../table/table';
import Row from '../table/row/row'
import styles from './characters.module.css';


interface CharactersProps {
  className?: string,
  id?: string
}

export default function Characters(props: CharactersProps): JSX.Element {
  return (
    <div id={props.id} className={`${styles.characters} ${props.className ?? ''}`}>
      <Table className={styles.table} columns={['character', 'alive', 'gender', 'culture', 'allegiances']}>
        <Row data={['hello', 'world', 'stupid', 'words', 'another']} />
        <Row data={['hello', 'world', 'stupid', 'words', 'another']} />
        <Row data={['hello', 'world', 'stupid', 'words', 'another']} />
      </Table>
    </div>
  )
}
