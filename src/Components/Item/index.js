import React from 'react';
import styles from './item.module.css';

const Item = () => {
  return (
    <div className={styles.item}>
      <img src="../" alt="" />
      <strong>Germany</strong>
      <span><strong>Population:</strong> 81.770.900</span>
      <span><strong>Region:</strong> Europe</span>
      <span><strong>Capital:</strong> Berlin</span>
    </div>
  )
}

export default Item;