import React, { useContext } from 'react';
import ThemeContext from '../../context/theme-context';
import House from '../../components/house/house';
import './houses.css';


export default function Houses() {
  const theme = useContext(ThemeContext);

  return (
    <div className='fill-all houses-page'>
      <p className={`grid-arms arms-h1 arms-${theme.theme}`}>Text describing the coat of arms of this House</p>
      <div className='grid-house house'>
        <House />
      </div>
    </div>
  );
}
