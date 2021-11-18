import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <strong className={styles.title}>Where in the world?</strong>
      </div>
    </header>
  )
}

export default Header;