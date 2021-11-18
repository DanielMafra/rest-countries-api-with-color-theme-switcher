import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './details.module.css';
import Header from '../Header/index';

const Details = () => {
  const [data, setData] = useState([]);
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(async () => {
    const response = await fetch(`https://restcountries.com/v2/alpha/${name}`)
    const json = await response.json();
    !json.status && setData(json);
  }, []);

  return (
    <>
      <Header />
      {data != '' && (
        <main className={styles.main}>
          <div className={styles.container}>
            <button onClick={() => navigate("/")}>back</button>
            <div className={styles.content}>
              <img src={`${data.flags.svg}`} alt="" />
              <div className={styles.infos}>
                <h2>{data.name}</h2>
                <div className={styles.columns}>
                  <div className={styles.column}>
                    <span><strong>Native Name:</strong> {data.nativeName}</span>
                    <span><strong>Population:</strong> {data.population.toLocaleString()}</span>
                    <span><strong>Region:</strong> {data.region}</span>
                    <span><strong>Sub Region:</strong> {data.subregion}</span>
                    <span><strong>Capital:</strong> {data.capital}</span>
                  </div>
                  <div className={styles.column}>
                    <span><strong>Top Level Domain:</strong> {data.topLevelDomain}</span>
                    <span><strong>Currencies:</strong> ---</span>
                    <span><strong>Languages:</strong> ---</span>
                  </div>
                </div>
              </div>
              <div className={styles.borders}>
                <span><strong>Border Countries:</strong> ---</span>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  )
}

export default Details;