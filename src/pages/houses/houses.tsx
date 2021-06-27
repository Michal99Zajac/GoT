import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ThemeContext from '../../context/theme-context';
import House from '../../components/house/house';
import { ReactComponent as ArrowSvg } from '../../assets/svg/arrow.svg'
import './houses.css';


export default function Houses() {
  const theme = useContext(ThemeContext);
  const history = useHistory()

  return (
    <div className='fill-all houses-page'>
      <p className={`grid-arms arms-h1 text-${theme.theme}`}>Text describing the coat of arms of this House</p>
      <div className='grid-house house'>
        <div className='header'>
          <ArrowSvg className={'back-arrow'} onClick={() => history.goBack()} />
          <p className={`house-name text-${theme.theme}`}>name of house</p>
        </div>
        <House />
      </div>
    </div>
  );
}
