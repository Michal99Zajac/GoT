import React from 'react';
import Table from '../table/table';
import Row from '../table/row/row';
import styles from './house.module.css';


interface HouseProps {
  className?: string;
  id?: string;
}

/**
 * House Component for display and fetch data about house
 * 
 * className? (string) - additional class for componwnt
 * id? (string) - id of component
 */
export default function House(props: HouseProps): JSX.Element {
  return (
    <Table
      // loading={true}
      className={styles.table}
      direction='horizontal'
      columns={
        ['region', 'words', 'titles', 'seats', 'has died out',
          'has overlord', 'number of cadet branches']
      }
    >
      <Row data={['region', 'words', 'titles', 'seats', 'has died out', 'has overlord', 'number of cadet branches']} />
    </Table>
  )
}
