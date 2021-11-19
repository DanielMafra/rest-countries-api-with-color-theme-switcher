import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './item.module.css';

const Item = ({ name, alpha, population, region, capital, flag }) => {
  const navigate = useNavigate();

  return (
    <div aria-label={`Details about ${name}`} role="button" tabindex="0" className={styles.item} onClick={() => navigate(`/${alpha}`)}>
      <img src={`${flag}`} alt="" />
      <strong>{name}</strong>
      <span><strong>Population:</strong> {population.toLocaleString()}</span>
      <span><strong>Region:</strong> {region}</span>
      <span><strong>Capital:</strong> {capital}</span>
    </div>
  )
}

export default Item;