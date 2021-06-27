import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../axios';
import HouseContext from '../../context/house-context';
import Table from '../table/table';
import Row from '../table/row/row';
import styles from './house.module.css';


interface HouseProps {
  className?: string;
  id?: string;
}

interface RawHouse {
  name: string;
  region: string;
  coatOfArms: string;
  words: string;
  titles: string[];
  seats: string[];
  overlord: string;
  diedOut: string;
  cadetBranches: string[];
}

/**
 * House Component for display and fetch data about house
 * 
 * className? (string) - additional class for componwnt
 * id? (string) - id of component
 */
export default function House(props: HouseProps): JSX.Element {
  const house = useContext(HouseContext);
  const { id } = useParams<{ id: string }>()

  const fetchHouse = async () => {
    house.setLoading(true);

    try {
      const res = await axios.get<RawHouse>(`/houses/${id}`);

      console.log(res.data);

      house.setHouse({
        name: res.data.name,
        region: res.data.region === '' ? 'Unknown' : res.data.region,
        coatOfArms: res.data.coatOfArms,
        words: res.data.words === '' ? 'No Words' : res.data.words,
        titles: res.data.titles.filter(v => v !== '').length === 0 ? 'No Titles' : res.data.titles.join(', '),
        seats: res.data.seats.filter(v => v !== '').length === 0 ? 'Unknown' : res.data.seats.join(', '),
        hasDiedOut: res.data.diedOut === '' ? 'No' : 'Yes',
        hasOverlord: res.data.overlord === '' ? 'No' : 'Yes',
        numberOfCadetBranches: res.data.cadetBranches.length
      })

    } catch (err) {
      console.log(err);
    }

    house.setLoading(false);
  };

  useEffect(() => {
    fetchHouse();
  }, [])

  return (
    <Table
      loading={house.loading}
      className={styles.table}
      direction='horizontal'
      columns={
        ['region', 'words', 'titles', 'seats', 'has died out',
          'has overlord', 'number of cadet branches']
      }
    >
      <Row data={[
        house.house.region,
        house.house.words,
        house.house.titles,
        house.house.seats,
        house.house.hasDiedOut,
        house.house.hasOverlord,
        house.house.numberOfCadetBranches
      ]}/>
    </Table>
  );
}
