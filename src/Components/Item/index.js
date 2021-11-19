import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Contexts/GlobalContext';
import styles from './item.module.css';

const Item = ({ name, alpha, population, region, capital, flag }) => {
  const { darkTheme } = useContext(GlobalContext);
  const navigate = useNavigate();

  return (
    <div aria-label={`Details about ${name}`} role="button" tabIndex="0" className={`${styles.item} ${darkTheme ? styles.itemDark : styles.itemLight}`} onClick={() => navigate(`/${alpha}`)}>
      <img src={`${flag}`} alt="" />
      <strong>{name}</strong>
      <span><strong>Population:</strong> {population.toLocaleString()}</span>
      <span><strong>Region:</strong> {region}</span>
      <span><strong>Capital:</strong> {capital}</span>
    </div>
  )
}

export default Item;