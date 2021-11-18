import React from 'react';
import styles from './Home.module.css';
import Header from './Header/index';
import Input from './Input/index';

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <Input />
        </div>
      </main>
    </>
  );
};

export default Home;