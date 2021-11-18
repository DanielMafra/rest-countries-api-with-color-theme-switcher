import React from 'react';
import styles from './item.module.css';

const Item = ({ name, population, region, capital, flag }) => {
  return (
    <div className={styles.item}>
      <img src={`${flag}`} alt="" />
      <strong>{name}</strong>
      <span><strong>Population:</strong> {population.toLocaleString()}</span>
      <span><strong>Region:</strong> {region}</span>
      <span><strong>Capital:</strong> {capital}</span>
    </div>
  )
}

export default Item;