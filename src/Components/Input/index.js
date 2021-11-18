import React from 'react';
import styles from './input.module.css';

const Input = () => {
  return (
    <input className={styles.input} type="text" placeholder="Search for a country..." />
  )
}

export default Input;