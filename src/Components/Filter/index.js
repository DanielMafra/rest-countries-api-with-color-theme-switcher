import React, { useContext } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';
import styles from './filter.module.css';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';

const Filter = () => {
  const { openFilter, setOpenFilter, setRegion } = useContext(GlobalContext);

  return (
    <div className={styles.filter}>
      <button onClick={() => setOpenFilter(!openFilter)}><span>Filter by Region</span><Arrow /></button>
      {openFilter && (
        <ul>
          <li onClick={() => setRegion("all")}>All</li>
          <li onClick={() => setRegion("africa")}>Africa</li>
          <li onClick={() => setRegion("americas")}>Americas</li>
          <li onClick={() => setRegion("asia")}>Asia</li>
          <li onClick={() => setRegion("europe")}>Europe</li>
          <li onClick={() => setRegion("oceania")}>Oceania</li>
        </ul>
      )}
    </div>
  )
}

export default Filter;