import React, { useContext } from 'react';
import { GlobalContext } from '../Contexts/GlobalContext';
import styles from './Home.module.css';
import Header from './Header/index';
import Input from './Input/index';
import Filter from './Filter/index';
import Item from './Item/index';

const Home = () => {
  const { data, darkTheme, loading } = useContext(GlobalContext);

  return (
    <>
      <Header />
      <main className={`${styles.main} ${darkTheme ? styles.mainDark : styles.mainLight}`}>
        <div className={styles.container}>
          <div className={styles.search}>
            <Input />
            <Filter />
          </div>
          {loading ? (
            <div className={styles.loader}></div>
          ) : (
            <div className={styles.items}>
              {data.map(item => {
                return <Item key={item.name} name={item.name} alpha={item.alpha2Code} population={item.population} region={item.region} capital={item.capital} flag={item.flags.svg} />
              })}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;