import React, { useContext, useEffect } from 'react';
import ThemeContext from '../../context/theme-context';
import './not-found.css';


/**
 * 404 page
 */
export default function NotFound() {
  const theme = useContext(ThemeContext);
  const snows = Array.from({length: 20}, (v, k) => k + 1); // snowflakes array

  /**
   * add snowflake animations
   */
  useEffect(() => {
    const snowflakes = document.querySelectorAll('.snowflake');

    snowflakes.forEach(s => {
      const delayOne = Math.random() * 20;
      const left = Math.floor(Math.random() * 100);

      s.setAttribute('style', `left: ${left}%;
      -webkit-animation-delay: ${delayOne}s;
      animation-delay: ${delayOne}s;
      `)
    })
  }, [])

  return (
    <div className='fill-all not-found'>
      <h1 className={`h1-not-found-${theme.theme}`}>400</h1>
      { snows.map((s, idx) => <span key={idx} className={`snowflake snow-${theme.theme}}`}></span>)  }
    </div>
  );
}
