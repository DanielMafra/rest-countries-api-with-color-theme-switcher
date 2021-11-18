import React, { useContext } from 'react';
import { GlobalContext } from '../Contexts/GlobalContext';
import styles from './Home.module.css';
import Header from './Header/index';
import Input from './Input/index';
import Filter from './Filter/index';
import Item from './Item/index';

const Home = () => {
  const { data } = useContext(GlobalContext);

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
            {data.map(item => {
              return <Item key={item.name} name={item.name} population={item.population} region={item.region} capital={item.capital} flag={item.flags.svg} />
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;