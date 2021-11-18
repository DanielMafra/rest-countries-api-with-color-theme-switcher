import React, { useContext } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';
import styles from './filter.module.css';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';

const Filter = () => {
  const { openFilter, setOpenFilter } = useContext(GlobalContext);

  return (
    <div className={styles.filter}>
      <button onClick={() => setOpenFilter(!openFilter)}><span>Filter by Region</span><Arrow /></button>
      {openFilter && (
        <ul>
          <li>All</li>
          <li>Africa</li>
          <li>America</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Oceania</li>
        </ul>
      )}
    </div>
  )
}

export default Filter;