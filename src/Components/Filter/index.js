import React, { useContext } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';
import styles from './filter.module.css';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';

const Filter = () => {
  const { openFilter, setOpenFilter, setRegion } = useContext(GlobalContext);

  return (
    <div className={styles.filter}>
      <button aria-label="Filter by Region" onClick={() => setOpenFilter(!openFilter)}><span>Filter by Region</span><Arrow /></button>
      {openFilter && (
        <ul>
          <li aria-label="Filter by All" role="button" tabindex="0" onClick={() => setRegion("all")}>All</li>
          <li aria-label="Filter by Africa" role="button" tabindex="0" onClick={() => setRegion("africa")}>Africa</li>
          <li aria-label="Filter by Americas" role="button" tabindex="0" onClick={() => setRegion("americas")}>Americas</li>
          <li aria-label="Filter by Asia" role="button" tabindex="0" onClick={() => setRegion("asia")}>Asia</li>
          <li aria-label="Filter by Europe" role="button" tabindex="0" onClick={() => setRegion("europe")}>Europe</li>
          <li aria-label="Filter by Oceania" role="button" tabindex="0" onClick={() => setRegion("oceania")}>Oceania</li>
        </ul>
      )}
    </div>
  )
}

export default Filter;