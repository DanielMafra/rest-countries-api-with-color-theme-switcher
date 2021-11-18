import React from 'react';
import styles from './Home.module.css';
import Header from './Header/index';
import Input from './Input/index';
import Filter from './Filter/index';
import Item from './Item/index';

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.search}>
            <Input />
            <Filter />
          </div>
          <div className={styles.items}>
            <Item />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;